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

export default Hyperspeed;
export type {
  HyperspeedDataImage,
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
