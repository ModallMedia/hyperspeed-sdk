// src/collections.ts

import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import {
  HyperspeedContentPagination,
  HyperspeedDataImage,
} from "../types/common";

const url = "https://hyperspeedcms.com/api/v2";

export type AuthorItem = {
  id: number;
  name: string;
  description: string;
  slug: string;
  organization_id: number;
  media_id: number;
  featured_image?: HyperspeedDataImage;
  updated_at: string;
  created_at: string;
};

export class Authors {
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
      baseURL: url + "/authors",
      headers: {
        Authorization: `Bearer ${this.api_key}`,
        "Organization-Id": this.organization.toString(),
        "Content-Type": "application/json",
      },
    });
  }
  /**
   * Fetches all auhtors.
   * Use case would be verifying Hyperspeed collection names or debugging integration.
   * This does *NOT* fetch the content within the collection.
   * @returns {Promise<AuthorItem[]>} - A promise that resolves to an array of collections.
   */
  async list(): Promise<AuthorItem[]> {
    try {
      const response = await this.axiosInstance.get("/");
      return response.data;
    } catch (error: any) {
      throw this.handleError(error);
    }
  }

  /**
   * Fetches paginated content items from a collection.
   * @template T - The custom fields for the content item. Accesible via the `data` property.
   * @param {string} name - The name of the collection.
   * @param {number} limit - The number of items per page.
   * @param {number} page - The page number.
   * @param {AxiosRequestConfig} [options] - Additional Axios request options.
   * @returns {Promise<HyperspeedContentPagination<T>>} - The paginated response.
   */
  async listPaginated<T = {}>(
    name: string,
    limit: number,
    page: number,
    options?: AxiosRequestConfig
  ): Promise<HyperspeedContentPagination<T>> {
    try {
      const params = { limit, page };
      const response = await this.axiosInstance.get(`/${name}`, {
        params,
        ...options,
      });
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
