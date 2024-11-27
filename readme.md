# Hyperspeed SDK

Javascript client library for the Hyperspeed API.

## 📦 Installation

```bash
npm install @hyperspeeed/api
```

## 🚀 Getting Started

Here's how to initialize the Hyperspeed SDK and make your first API calls.

### Import the Hyperspeed Class

```javascript
import Hyperspeed from "@hyperspeeed/api";
// or, if using CommonJS
// const Hyperspeed = require('@hyperspeeed/api').default;
```

### Initialize the Hyperspeed Instance

```javascript
const hyper_speed = new Hyperspeed({
  organization: YOUR_ORGANIZATION_ID,
  api_key: "YOUR_API_KEY",
  // Optional: Set a custom base URL if needed
  // baseURL: 'https://your-api-domain.com/api/v2',
});
```

Replace `YOUR_ORGANIZATION_ID` and `YOUR_API_KEY` with your actual organization ID and hyperspeed token. You can find [both of those here.](https://hyperspeedcms.com/admin/settings)

## 📚 API Methods

### Collections

#### List All Collections

Fetches a list of all collections within your organization.

```javascript
const collections = await hyper_speed.collections.list();
```

**Returns**: `Promise<Array<Collection & CollectionCount>>`

**Example**:

```javascript
(async () => {
  try {
    const collections = await hyper_speed.collections.list();
    console.log("Collections:", collections);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
})();
```

---

#### Get a Specific Collection

Fetches a specific collection by its name.

```javascript
const collection = await hyper_speed.collections.get("collection-name");
```

**Parameters**:

- `name` (_string_): The name of the collection.

**Returns**: `Promise<Collection & { contents: Array<Content<T>> }>`

**Example**:

```javascript
(async () => {
  try {
    const collection = await hyper_speed.collections.get("BlogPosts");
    console.log("Collection:", collection);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
})();
```

---

#### Get Slugs for a Collection

Fetches all content slugs within a specific collection.

```javascript
const slugs = await hyper_speed.collections.getSlugs("collection-name");
```

**Parameters**:

- `name` (_string_): The name of the collection.

**Returns**: `Promise<Array<{ id: number; slug: string }>>`

**Example**:

```javascript
(async () => {
  try {
    const slugs = await hyper_speed.collections.getSlugs("BlogPosts");
    console.log("Slugs:", slugs);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
})();
```

---

#### Get Random Content Items

Fetches a specified number of random content items from a collection.

```javascript
const randomContents = await hyper_speed.collections.getRandom(
  "collection-name",
  limit
);
```

**Parameters**:

- `name` (_string_): The name of the collection.
- `limit` (_number_, optional): The number of random items to fetch. Defaults to `1`.

**Returns**: `Promise<Array<Content<T>>>`

**Example**:

```javascript
(async () => {
  try {
    const randomContents = await hyper_speed.collections.getRandom(
      "BlogPosts",
      3
    );
    console.log("Random Contents:", randomContents);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
})();
```

---

#### Get Paginated Content Items

Fetches content items from a collection with pagination.

```javascript
const paginatedContents = await hyper_speed.collections.getPaginated(
  "collection-name",
  limit,
  page
);
```

**Parameters**:

- `name` (_string_): The name of the collection.
- `limit` (_number_): The number of items per page.
- `page` (_number_): The page number to fetch.

**Returns**: `Promise<PaginatedResponse<T>>`

**Example**:

```javascript
(async () => {
  try {
    const paginatedContents = await hyper_speed.collections.getPaginated(
      "BlogPosts",
      10,
      2
    );
    console.log("Paginated Contents:", paginatedContents);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
})();
```

---

#### Get a Content Item by Slug

Fetches a specific content item within a collection by its slug.

```javascript
const contentItem = await hyper_speed.collections.getContentBySlug(
  "collection-name",
  "content-slug"
);
```

**Parameters**:

- `name` (_string_): The name of the collection.
- `slug` (_string_): The slug of the content item.

**Returns**: `Promise<PageContent<T>>`

**Example**:

```javascript
(async () => {
  try {
    const contentItem = await hyper_speed.collections.getContentBySlug(
      "BlogPosts",
      "how-to-use-hyperspeed"
    );
    console.log("Content Item:", contentItem);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
})();
```

---

## 📘 Type Definitions

For TypeScript users, the SDK includes comprehensive type definitions to enhance the development experience.

- `Collection`
- `Content<T>`
- `PaginatedResponse<T>`
- `PageContent<T>`
- `CollectionCount`

## 🛠 Error Handling

All methods throw errors if the API request fails. Use `try...catch` blocks to handle errors gracefully.

**Example**:

```javascript
try {
  const collections = await hyper_speed.collections.list();
} catch (error) {
  console.error("An error occurred:", error.message);
}
```

## 🔧 Configuration Options

When initializing the Hyperspeed SDK, you can pass the following configuration options:

- `organization` (_number_): Your organization ID.
- `api_key` (_string_): Your API key.
- `baseURL` (_string_, optional): The base URL of the API. Defaults to `http://localhost:3000/api/v2`.

**Example**:

```javascript
const hyper_speed = new Hyperspeed({
  organization: 21,
  api_key: "your_api_key",
  baseURL: "https://api.yourdomain.com/api/v2",
});
```

## ⚙️ Advanced Usage

### Passing Additional Request Configurations

You can pass additional Axios request configurations to methods that accept an `options` parameter.

**Example**:

```javascript
const response = await hyper_speed.collections.get("BlogPosts", {
  headers: {
    "Custom-Header": "value",
  },
});
```

## 📝 License

[MIT License](LICENSE)

## 🤝 Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) before getting started.

## 📄 Changelog

See the [CHANGELOG.md](CHANGELOG.md) file for details.

## 📫 Contact

If you have any questions or need further assistance, feel free to open an issue or contact the maintainers.

```

```
