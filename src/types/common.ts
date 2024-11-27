export type hyperSpeedImage = {
  url: string;
  alt_text?: string;
};
export type hyperSpeedImageGallery = {
  url: string;
  alt_text?: string;
}[];

export type hyperSpeedJson = {
  value: string;
  trait_type: string;
};

export type hyperSpeedCustomJson<T extends string | number | symbol> = {
  [key in T]: string;
};

export type hyperSpeedCollection = {
  id: number;
  created_at: string;
  description: string;
  icon: string;
  name: string;
  organization_id: number;
  page_content: boolean;
  updated_at: string;
};

export type collectionCount = {
  _count: {
    contents: number;
  };
};

export type hyperSpeedContent<T> = {
  created_at: string;
  author?: {
    name: string;
    featured_image: hyperSpeedImage;
  };
  description: string;
  id: number;
  slug: string;
  title: string;
  updated_at: string;
  data: T;
};

export type hyperSpeedCollectionPagination<T> = {
  next_page: number | null;
  prev_page: number | null;
  total_pages: number;
  data: hyperSpeedCollection & { contents: hyperSpeedContent<T>[] };
};

export type hyperSpeedPageContent<T> = {
  description: string;
  id: number;
  title: string;
  slug: string;
  draft: boolean;
  archive: boolean;
  comments_enabled: boolean;
  collection_id: number;
  data: T;
  blocks: {
    type: string;
    content: any[];
  };
  html: string;
  created_at: string;
  updated_at: string;
  comments: any[];
  author?: {
    name: string;
    featured_image: hyperSpeedImage;
  };
  collection: {
    id: number;
    name: string;
    organization_id: number;
    icon: string;
    description: string;
    page_content: boolean;
    created_at: string;
    updated_at: string;
  };
};
