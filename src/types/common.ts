import { AuthorItem } from "../lib/authors";

export type HyperspeedDataImage = {
  url: string;
  alt_text?: string;
};
export type HyperspeedDataImageGallery = {
  url: string;
  alt_text?: string;
}[];

export type HyperspeedDataJSON = {
  value: string;
  trait_type: string;
};

export type HyperspeedDataCustomJSON<T extends string | number | symbol> = {
  [key in T]: string;
};

export type HyperspeedCollection = {
  id: number;
  created_at: string;
  description: string;
  icon: string;
  name: string;
  organization_id: number;
  page_content: boolean;
  path_prefix: string | null;
  updated_at: string;
};

export type collectionCount = {
  _count: {
    contents: number;
  };
};

export type HyperspeedContent<T> = {
  created_at: string;
  author?: {
    name: string;
    featured_image?: HyperspeedDataImage;
    description: string;
    organization_id: number;
    id: number;
    media_id?: number;
  };
  content_category: string[];
  description: string;
  id: number;
  slug: string;
  title: string;
  updated_at: string;
  data: T;
};

export type HyperspeedContentPagination<T> = {
  next_page: number | null;
  prev_page: number | null;
  total_pages: number;
  total_items: number;
  updated_at: string | null;
  data: HyperspeedContent<T>[];
};

type Comment = {
  id: number;
  text: string;
  image_url: string | null;
  author: string;
  created_at: Date;
  parent_id: number | null;
  content_id: number;
};

interface CommentNode extends Comment {
  replies: CommentNode[];
}
export type HyperspeedContentSingle<T> = {
  description: string;
  id: number;
  title: string;
  slug: string;
  draft: boolean;
  archive: boolean;
  comments_enabled: boolean;
  content_category: string[];
  collection_id: number;
  data: T;
  blocks: {
    type: string;
    content: any[];
  };
  html: string;
  created_at: string;
  updated_at: string;
  comments: CommentNode[];
  author?: AuthorItem;
  collection: HyperspeedCollection;
};
