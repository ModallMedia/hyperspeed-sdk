import Hyperspeed from "./lib/hyperspeed";
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
export default Hyperspeed;
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
