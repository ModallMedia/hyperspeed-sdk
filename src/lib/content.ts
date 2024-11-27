// src/content.ts

import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import {
  hyperSpeedCollectionPagination,
  hyperSpeedContent,
  hyperSpeedPageContent,
} from "../types/common";

const url = "https://hyperspeedcms.com/api/v2";

/**
 * Class representing the Collections resource.
 */
export class Contents {
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
   * Fetches all of the content from within a collection.
   * @template T
   * @param {string} name - The name of the collection.
   * @returns {Promise<hyperSpeedContent<T>}>} - The collection data.
   */
  async list<T = {}>(name: string): Promise<Array<hyperSpeedContent<T>>> {
    try {
      const response = await this.axiosInstance.get(`/${name}/content`);
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
   * @returns {Promise<hyperSpeedCollectionPagination<T>>} - The paginated response.
   */
  async listPaginated<T = {}>(
    name: string,
    limit: number,
    page: number,
    options?: AxiosRequestConfig
  ): Promise<hyperSpeedCollectionPagination<T>> {
    try {
      const params = { limit, page };
      const response = await this.axiosInstance.get(`/${name}/paginated`, {
        params,
        ...options,
      });
      return response.data;
    } catch (error: any) {
      throw this.handleError(error);
    }
  }

  /**
   * Fetches a specific content item by slug within a collection.
   * @template T - The custom fields for the content item. Accesible via the `data` property.
   * @param {string} name - The collection name set on hyperspeed that contains the specified slug.
   * @param {string} slug - The slug of the content item.
   * @param {AxiosRequestConfig} [options] - Additional Axios request options.
   * @returns {Promise<hyperSpeedPageContent<T>>} - The content item data.
   */
  async get<T = {}>(
    name: string,
    slug: string,
    options?: AxiosRequestConfig
  ): Promise<hyperSpeedPageContent<T>> {
    try {
      const response = await this.axiosInstance.get(
        `/${name}/${slug}`,
        options
      );
      return response.data;
    } catch (error: any) {
      throw this.handleError(error);
    }
  }

  /**
   * Fetches random content items from a specified collection without bias.
   * @template T - The custom fields for the content item. Accesible via the `data` property.
   * @param {string} name - The name of the collection.
   * @param {number} [limit=1] - The number of items to fetch.
   * @param {AxiosRequestConfig} [options] - Additional Axios request options.
   * @returns {Promise<Array<hyperSpeedContent<T>>>} - An array of content items.
   */
  async listRandom<T = {}>(
    name: string,
    limit: number = 1,
    options?: AxiosRequestConfig
  ): Promise<Array<hyperSpeedContent<T>>> {
    try {
      const params = { limit };
      const response = await this.axiosInstance.get(`/${name}/random`, {
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
