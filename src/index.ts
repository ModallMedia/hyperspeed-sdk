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
import { Prisma } from "./lib/prisma-types";
import { HyperspeedV3 } from "./lib/hyperspeed";
export default HyperspeedV3;
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
