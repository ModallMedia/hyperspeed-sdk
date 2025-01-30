import { HyperspeedV2, HyperspeedV3 } from "./lib/hyperspeed";
import {
  HyperspeedDataImage,
  HyperspeedDataImageGallery,
  HyperspeedDataJSON,
  HyperspeedDataCustomJSON,
  HyperspeedCollection,
  collectionCount,
  HyperspeedContent,
  HyperspeedContentPagination,
  HyperspeedContentSingle,
} from "./types/common";
import { MessagePayload, MessageResponse } from "./lib/messages";
import { CommentPayload } from "./lib/comments";
import { PrismaClient } from "@prisma/client";
export { PrismaClient };
export { HyperspeedV2, HyperspeedV3 };
export type {
  HyperspeedDataImage,
  CommentPayload,
  HyperspeedDataImageGallery,
  HyperspeedDataJSON,
  HyperspeedDataCustomJSON,
  HyperspeedCollection,
  collectionCount,
  HyperspeedContent,
  HyperspeedContentPagination,
  MessagePayload,
  MessageResponse,
  HyperspeedContentSingle,
};
