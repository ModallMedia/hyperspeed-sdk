// src/hyperspeed.ts

import { Authors } from "./authors";
import { Collections } from "./collection";
import { Comment } from "./comments";
import { Contents } from "./content";
import { Messages } from "./messages";
import { Posts } from "./post";
import {
  AuthorsV3,
  CategoriesV3,
  CollectionsV3,
  CommentsV3,
  ContentV3,
} from "./v3/v3";

interface HyperspeedConfig {
  organization: number;
  api_key: string;
  version?: number;
  baseURL?: string;
}

/**
 * The main Hyperspeed class for interacting with the Hyperspeed API.
 */
export class Hyperspeed {
  private api_key: string;
  private organization: number;
  private version: number = 2; // Default API version
  collections: Collections | CollectionsV3;
  content: Contents | ContentV3;
  categories?: CategoriesV3;
  messages: Messages;
  comments: Comment | CommentsV3;
  authors: Authors | AuthorsV3;
  posts: Posts;
  /**
   * Creates an instance of Hyperspeed.
   * @param {HyperspeedConfig} config - Configuration options.
   */
  constructor(config: HyperspeedConfig) {
    this.api_key = config.api_key;
    this.organization = config.organization;
    this.version = config.version;
    if (config.version === 2) {
      this.collections = new CollectionsV3(this.api_key, this.organization);
      this.authors = new AuthorsV3(this.api_key, this.organization);
      this.content = new ContentV3(this.api_key, this.organization);
      this.comments = new CommentsV3(this.api_key, this.organization);
      this.categories = new CategoriesV3(this.api_key, this.organization);
    } else {
      this.collections = new Collections(this.api_key, this.organization);
      this.authors = new Authors(this.api_key, this.organization);
      this.content = new Contents(this.api_key, this.organization);
      this.messages = new Messages(this.api_key, this.organization);
      this.comments = new Comment(this.api_key, this.organization);
      this.posts = new Posts(this.api_key, this.organization);
    }
  }
}

export default Hyperspeed;
