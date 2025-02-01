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
  LinksV3,
} from "./v3/v3";

interface HyperspeedConfig {
  organization: number;
  api_key: string;
  baseURL?: string;
}

/**
 * HyperspeedV2 - API Version 2
 */
export class HyperspeedV2 {
  private api_key: string;
  private organization: number;

  collections: Collections;
  content: Contents;
  messages: Messages;
  comments: Comment;
  authors: Authors;
  posts: Posts;

  constructor(config: HyperspeedConfig) {
    this.api_key = config.api_key;
    this.organization = config.organization;

    this.collections = new Collections(this.api_key, this.organization);
    this.authors = new Authors(this.api_key, this.organization);
    this.content = new Contents(this.api_key, this.organization);
    this.messages = new Messages(this.api_key, this.organization);
    this.comments = new Comment(this.api_key, this.organization);
    this.posts = new Posts(this.api_key, this.organization);
  }
}

/**
 * HyperspeedV3 - API Version 3
 */
export class HyperspeedV3 {
  private api_key: string;
  private organization: number;

  collections: CollectionsV3;
  content: ContentV3;
  comments: CommentsV3;
  authors: AuthorsV3;
  categories: CategoriesV3;
  links: LinksV3;

  constructor(config: HyperspeedConfig) {
    this.api_key = config.api_key;
    this.organization = config.organization;
    this.links = new LinksV3(this.api_key, this.organization);
    this.collections = new CollectionsV3(this.api_key, this.organization);
    this.authors = new AuthorsV3(this.api_key, this.organization);
    this.content = new ContentV3(this.api_key, this.organization);
    this.comments = new CommentsV3(this.api_key, this.organization);
    this.categories = new CategoriesV3(this.api_key, this.organization);
  }
}
