// src/hyperspeed.ts

import { Collections } from "./collection";

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

  /**
   * Creates an instance of Hyperspeed.
   * @param {HyperspeedConfig} config - Configuration options.
   */
  constructor(config: HyperspeedConfig) {
    this.api_key = config.api_key;
    this.organization = config.organization;

    this.collections = new Collections(this.api_key, this.organization);
  }
}

export default Hyperspeed;
