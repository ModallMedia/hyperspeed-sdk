// src/collections.ts

import axios, { AxiosInstance } from "axios";
import { HyperspeedCollection } from "../types/common";

const url = "https://hyperspeedcms.com/api/v2";

/**
 * Class representing the Collections resource.
 */
export class Collections {
  private api_key: string;
  private organization: number;
  private axiosInstance: AxiosInstance;
  /**
   * Creates an instance of Collections.
   * @param {string} api_key - The API key for authentication.
   * @param {number} organization - The organization ID.
   */
  constructor(api_key: string, organization: number) {
    this.api_key = api_key;
    this.organization = organization;
    // Create an Axios instance with default headers
    this.axiosInstance = axios.create({
      baseURL: url + "/collections",
      headers: {
        Authorization: `Bearer ${this.api_key}`,
        "Organization-Id": this.organization.toString(),
        "Content-Type": "application/json",
      },
    });
  }
  /**
   * Fetches all collections.
   * Use case would be verifying Hyperspeed collection names or debugging integration.
   * This does *NOT* fetch the content within the collection.
   * @returns {Promise<Array<Promise<HyperspeedCollection> >>} - A promise that resolves to an array of collections.
   */
  async list(): Promise<HyperspeedCollection[]> {
    try {
      const response = await this.axiosInstance.get("/");
      return response.data;
    } catch (error: any) {
      throw this.handleError(error);
    }
  }
  /**
   * Fetches a specific collection by name.
   * This does *NOT* fetch the content within the collection.
   * @param {string} name - The name of the collection.
   * @returns {Promise<HyperspeedCollection> } - The collection data.
   */
  async get(name: string): Promise<HyperspeedCollection> {
    try {
      const response = await this.axiosInstance.get(`/${name}`);
      return response.data;
    } catch (error: any) {
      throw this.handleError(error);
    }
  }
  /**
   * Fetches all slugs for a specific collection.
   * Primarily used for generating the paths in NextJS
   * @param {string} name - The name of the collection.
   * @returns {Promise<Array<{ slug: string }>>} - An array of content slugs.
   */
  async listSlugs(name: string): Promise<{ slug: string }[]> {
    try {
      const response = await this.axiosInstance.get(`/${name}/slugs`);
      return response.data;
    } catch (error: any) {
      throw this.handleError(error);
    }
  }
  /**
   * Handles errors from API requests.
   * @private
   * @param {any} error - The error object.
   * @returns {Error} - A formatted error.
   */
  private handleError(error: any): Error {
    if (error.response && error.response.data && error.response.data.error) {
      return new Error(error.response.data.error);
    }
    return new Error(error.message);
  }
}
