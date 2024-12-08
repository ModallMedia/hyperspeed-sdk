// src/hyperspeed.ts

import { Collections } from "./collection";
import { Comment } from "./comments";
import { Contents } from "./content";
import { Messages } from "./messages";

interface HyperspeedConfig {
  organization: number;
  api_key: string;
  baseURL?: string;
}

/**
 * The main Hyperspeed class for interacting with the Hyperspeed API.
 */
export class Hyperspeed {
  private api_key: string;
  private organization: number;
  collections: Collections;
  content: Contents;
  messages: Messages;
  comments: Comment;

  /**
   * Creates an instance of Hyperspeed.
   * @param {HyperspeedConfig} config - Configuration options.
   */
  constructor(config: HyperspeedConfig) {
    this.api_key = config.api_key;
    this.organization = config.organization;

    this.collections = new Collections(this.api_key, this.organization);
    this.content = new Contents(this.api_key, this.organization);
    this.messages = new Messages(this.api_key, this.organization);
    this.comments = new Comment(this.api_key, this.organization);
  }
}

export default Hyperspeed;
