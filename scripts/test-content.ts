// Manual smoke test for ContentV3.findFirst against the vendored Prisma types.
// Usage: npm run test:content -- <organization_id> <hyperspeed_token>
import { HyperspeedV3 } from "../src/lib/hyperspeed";

const [organizationArg, apiKeyArg] = process.argv.slice(2);
const organization = Number(organizationArg ?? process.env.ORGANIZATION_ID);
const api_key = apiKeyArg ?? process.env.HYPERSPEED_TOKEN;

if (!organization || !api_key) {
	console.error(
		"Usage: npm run test:content -- <organization_id> <hyperspeed_token>",
	);
	process.exit(1);
}

const hyper_speed = new HyperspeedV3({ organization, api_key });

async function main() {
	const post = await hyper_speed.content.findFirst({
		where: { archive: false, draft: false },
		include: {
			collection: true,
			content_categories: true,
		},
	});

	if (!post) {
		console.error("No content found for this organization.");
		process.exit(1);
	}

	// We're outputting the full post, but you can log whatever you want here to confirm it's working.
	// You may even just need to play around in this file with intellisense to ensure the types are correct.
	console.dir({ post }, { depth: null });
}

main();
