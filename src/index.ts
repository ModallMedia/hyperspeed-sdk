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
import { HyperspeedV3 } from "./lib/hyperspeed";
import { HyperspeedV2 } from "./lib/hyperspeed";
export { HyperspeedV2 };
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
