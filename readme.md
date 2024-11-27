# Hyperspeed SDK `V1.0.0`

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
  organization: "<YOUR_ORGANIZATION_ID>",
  api_key: "<YOUR_API_KEY>",
});
```

Replace `<YOUR_ORGANIZATION_ID>` and `<YOUR_API_KEY>` with your actual organization ID and API key.

---

## 📚 API Methods

The Hyperspeed SDK is divided into three main sections:

- [Collections](#collections)
- [Content](#content)
- [Messages](#messages)

---

## Collections

### List All Collections

Fetches a list of all collections within your organization. Useful for verifying collection names or debugging integration.

```javascript
async function listCollections() {
  const hyper_speed = new Hyperspeed({
    organization: "<YOUR_ORGANIZATION_ID>",
    api_key: "<YOUR_API_KEY>",
  });

  try {
    const collections = await hyper_speed.collections.list();
    console.log("Collections:", collections);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}
```

**Returns**: `Promise<Array<Collection>>`

---

### Get a Specific Collection

Fetches a specific collection by its name. This does **NOT** fetch the content within the collection.

**Parameters**:

- `name` (_string_): The name of the collection.

**Returns**: `Promise<Collection>`

```javascript
async function getCollection() {
  const hyper_speed = new Hyperspeed({
    organization: "<YOUR_ORGANIZATION_ID>",
    api_key: "<YOUR_API_KEY>",
  });

  try {
    const collection = await hyper_speed.collections.get("BlogPosts");
    console.log("Collection:", collection);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}
```

---

### List All Slugs for a Collection

Fetches all content slugs within a specific collection. Primarily used for generating paths in frameworks like Next.js.

**Parameters**:

- `name` (_string_): The name of the collection.

**Returns**: `Promise<Array<{ slug: string }>>`

```javascript
async function listSlugs() {
  const hyper_speed = new Hyperspeed({
    organization: "<YOUR_ORGANIZATION_ID>",
    api_key: "<YOUR_API_KEY>",
  });

  try {
    const slugs = await hyper_speed.collections.listSlugs("BlogPosts");
    console.log("Slugs:", slugs);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}
```

---

## Content

### List All Content in a Collection

Fetches all of the content from within a collection.

**Parameters**:

- `name` (_string_): The name of the collection.

**Returns**: `Promise<Array<Content<T>>>`

```javascript
async function listContent() {
  const hyper_speed = new Hyperspeed({
    organization: "<YOUR_ORGANIZATION_ID>",
    api_key: "<YOUR_API_KEY>",
  });

  try {
    const content = await hyper_speed.content.list("BlogPosts");
    console.log("Content:", content);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}
```

---

### Get a Specific Content Item

Fetches a specific content item by slug within a collection.

**Parameters**:

- `name` (_string_): The name of the collection.
- `slug` (_string_): The slug of the content item.

**Returns**: `Promise<PageContent<T>>`

```javascript
async function getContentItem() {
  const hyper_speed = new Hyperspeed({
    organization: "<YOUR_ORGANIZATION_ID>",
    api_key: "<YOUR_API_KEY>",
  });

  try {
    const contentItem = await hyper_speed.content.get(
      "BlogPosts",
      "my-first-post"
    );
    console.log("Content Item:", contentItem);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}
```

---

### List Paginated Content Items

Fetches content items from a collection with pagination.

**Parameters**:

- `name` (_string_): The name of the collection.
- `limit` (_number_): The number of items per page.
- `page` (_number_): The page number to fetch.

**Returns**: `Promise<PaginatedResponse<T>>`

```javascript
async function listPaginatedContent() {
  const hyper_speed = new Hyperspeed({
    organization: "<YOUR_ORGANIZATION_ID>",
    api_key: "<YOUR_API_KEY>",
  });

  try {
    const paginatedContent = await hyper_speed.content.listPaginated(
      "BlogPosts",
      10,
      1
    );
    console.log("Paginated Content:", paginatedContent);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}
```

---

### List Random Content Items

Fetches random content items from a specified collection without bias.

**Parameters**:

- `name` (_string_): The name of the collection.
- `limit` (_number_, optional): The number of random items to fetch. Defaults to `1`.

**Returns**: `Promise<Array<Content<T>>>`

```javascript
async function listRandomContent() {
  const hyper_speed = new Hyperspeed({
    organization: "<YOUR_ORGANIZATION_ID>",
    api_key: "<YOUR_API_KEY>",
  });

  try {
    const randomContent = await hyper_speed.content.listRandom("BlogPosts", 3);
    console.log("Random Content:", randomContent);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}
```

---

## Messages

### Create a New Message

Creates a new message (e.g., a contact form submission).

**Parameters**:

- `data` (_MessagePayload_): The message data to send.

**Returns**: `Promise<MessageResponse>`

```javascript
async function createMessage() {
  const hyper_speed = new Hyperspeed({
    organization: "<YOUR_ORGANIZATION_ID>",
    api_key: "<YOUR_API_KEY>",
  });

  try {
    const messageData = {
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      phone_number: "1234567890",
      message: "Hello, I am interested in your services.",
      other_fields: [{ company: "Example Corp" }, { position: "Developer" }],
    };

    const response = await hyper_speed.messages.create(messageData);
    console.log("Message Response:", response);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}
```

---

## 🛠 Type Definitions

For TypeScript users, the SDK includes comprehensive type definitions to enhance the development experience.

- `Collection`
- `Content<T>`
- `PageContent<T>`
- `PaginatedResponse<T>`
- `MessagePayload`
- `MessageResponse`
- `MessageSuccessResponse`
- `MessageErrorResponse`

---

## 📝 Coming Soon

Exciting new features are on the horizon:

1. **Comments**: Allow users to comment on specific posts, create threads in comments, and display the comments on specific blog posts.
2. **Featured Posts**: Fetch content marked as featured.
3. **RSS Feeds**: Fetch a formatted XML feed for each of the collections.
4. **Create Content from API**: Upload content to Hyperspeed programmatically using markdown.
5. **& More**: Stay tuned for additional features and improvements!

---

## 📝 License

[MIT License](LICENSE)

## 🤝 Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) before getting started.

## 📫 Contact

If you have any questions or need further assistance, feel free to open an issue or contact the maintainers.
