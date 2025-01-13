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

export type Category = {
  id: number;
  name: string;
  short_name: string;
  organization_id: number;
  slug: string;
  description: string;
  parent_id: number | null;
  collection_id: number;
  created_at: string;
  updated_at: string;
};

export type HyperspeedCollection = {
  id: number;
  created_at: string;
  description: string;
  icon: string;
  name: string;
  title: string;
  organization_id: number;
  page_content: boolean;
  enable_author: boolean;
  enable_comments: boolean;
  enable_featured_posts: boolean;
  enable_rating: boolean;
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
  author?: AuthorItem;
  content_category: string[];
  content_categories: Category[];
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
  updated_at: string;
  created_at: string;
  data: HyperspeedContent<T>[];
};
export type HyperspeedCategoryContentPagination<T> = {
  next_page: number | null;
  prev_page: number | null;
  total_pages: number;
  category: Category;
  total_items: number;
  updated_at: string;
  created_at: string;
  data: HyperspeedContent<T>[];
};

type Comment = {
  id: number;
  text: string;
  image_url: string | null;
  author: string;
  rating: number | null;
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
  content_categories: Category[];
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
  comment_details: {
    total: number;
    average: string | null;
    total_pages: number;
    prev_page: number | null;
    next_page: number | null;
  };
};
