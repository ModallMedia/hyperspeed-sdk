# Updating SDK Prisma types

The SDK no longer depends on the `@hyperspeed/prisma-types` npm package. Instead,
`src/lib/prisma-types/index.d.ts` is a vendored copy of the Prisma-generated
`Prisma` namespace types, sourced directly from `client-wildcard-app`'s schema.

This file exists in both `hyperspeed-sdk` and `client-wildcard-app` (as
`updating-sdk-types.md`, next to each repo's README) so whichever repo you're
in, the instructions for updating types are right there.

## Prerequisite: sibling folder layout

`client-wildcard-app` and `hyperspeed-sdk` must be checked out as **sibling
directories** (e.g. both directly under the same folder like `~/repos/`). The sync script
in `client-wildcard-app` copies its generated types into this repo using a
relative path (`../hyperspeed-sdk/...`), so it will fail if the two repos
aren't sitting next to each other.

## How to update the types

Whenever `client-wildcard-app`'s Prisma schema changes (new/renamed/removed
fields or models) and the SDK needs to see those changes:

1. In `client-wildcard-app`, run:
   ```
   npm run sync:sdk-types
   ```
   This runs `prisma generate` against the current schema, then copies the
   freshly generated `index.d.ts` into
   `hyperspeed-sdk/src/lib/prisma-types/index.d.ts`.
2. In `hyperspeed-sdk`, typecheck to make sure nothing broke:
   ```
   npx tsc --noEmit
   ```
3. Commit the updated `src/lib/prisma-types/index.d.ts` in `hyperspeed-sdk`
   along with whatever code changes prompted the update.
4. If you want to confirm the new/changed fields actually resolve end-to-end
   (not just type-check), run the manual smoke test:
   ```
   npm run test:content -- <organization_id> <hyperspeed_token>
   ```
   This calls `content.findFirst` through the SDK and logs a few
   `collection`/`content_categories` fields so you can see real values come
   back over the wire. See `scripts/test-content.ts`.

## Publishing the update

Once the vendored types are updated and committed:

1. Bump the version in `package.json` (e.g. `npm version patch`).
2. Run `npm run build`. This builds `dist/`, and the `postbuild` script
   publishes the package automatically via `npm publish` — there's no
   separate publish step.

## Why it's just one file

`hyperspeed-sdk` only ever uses the `Prisma` namespace for **type positions**
(e.g. `Prisma.ContentFindManyArgs`, `Prisma.ContentGetPayload<T>`) — it never
runs real Prisma queries. So the SDK doesn't need the query engine binary,
the generated `.js` runtime, or a schema.prisma — just the generated
`index.d.ts`, plus `@prisma/client` as a regular dependency (pinned to the
same version used to generate the file) to satisfy the generic
`@prisma/client/runtime/library.js` types that `index.d.ts` imports.

## Gotcha: babel picks up `.d.ts` files too

The build step (`npm run build`) runs `tsc` (which correctly ignores ambient
`.d.ts` inputs when emitting `dist/`) followed by babel with
`--extensions ".ts,.tsx"`. Babel matches on file extension, and `index.d.ts`
ends in `.ts`, so it will try to parse the vendored file as executable code
and fail on ambient-only syntax (e.g. `const x: string;` with no
initializer). The build script explicitly excludes it via
`--ignore "src/lib/prisma-types/**"` and then copies the file into `dist/`
by hand afterward. If you ever change the build script, keep both of those
in place — otherwise published packages will be missing the types file, or
the build will fail outright.
