// src/collections.ts

import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { Hyperspeed } from "./hyperspeed";
import {
  collectionCount,
  hyperSpeedCollection,
  hyperSpeedCollectionPagination,
  hyperSpeedContent,
  hyperSpeedPageContent,
} from "../types/common";

const url = "https://hyperspeedcms.com/api/v2/collections"; // Replace with your API domain

/**
 * Class representing the Collections resource.
 */
export class Collections {
  private api_key: string;
  private organization: number;
  private axiosInstance: AxiosInstance;
  private baseURL: string;
  /**
   * Creates an instance of Collections.
   * @param {string} api_key - The API key for authentication.
   * @param {number} organization - The organization ID.
   * @param {string} baseURL - The base URL of the API.
   */
  constructor(api_key: string, organization: number) {
    this.api_key = api_key;
    this.organization = organization;
    this.baseURL = url;

    // Create an Axios instance with default headers
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      headers: {
        Authorization: `Bearer ${this.api_key}`,
        "Organization-Id": this.organization.toString(),
        "Content-Type": "application/json",
      },
    });
  }
  /**
   * Fetches all collections.
   * @returns {Promise<Array<hyperSpeedCollection & collectionCount>>} - A promise that resolves to an array of collections.
   */
  async list(): Promise<Array<hyperSpeedCollection & collectionCount>> {
    try {
      const response = await this.axiosInstance.get("/");
      return response.data;
    } catch (error: any) {
      throw this.handleError(error);
    }
  }

  /**
   * Fetches a specific collection by name.
   * @template T
   * @param {string} name - The name of the collection.
   * @returns {Promise<hyperSpeedCollection & { contents: Array<hyperSpeedContent<T>> }>} - The collection data.
   */
  async get<T = {}>(
    name: string
  ): Promise<hyperSpeedCollection & { contents: Array<hyperSpeedContent<T>> }> {
    try {
      const response = await this.axiosInstance.get(`/${name}`);
      return response.data;
    } catch (error: any) {
      throw this.handleError(error);
    }
  }

  /**
   * Fetches all slugs for a specific collection.
   * @param {string} name - The name of the collection.
   * @returns {Promise<Array<{ id: number; slug: string }>>} - An array of content slugs.
   */
  async getSlugs(name: string): Promise<{ id: number; slug: string }[]> {
    try {
      const response = await this.axiosInstance.get(`/${name}/slugs`);
      return response.data;
    } catch (error: any) {
      throw this.handleError(error);
    }
  }

  /**
   * Fetches random content items from a collection.
   * @template T
   * @param {string} name - The name of the collection.
   * @param {number} [limit=1] - The number of items to fetch.
   * @param {AxiosRequestConfig} [options] - Additional Axios request options.
   * @returns {Promise<Array<hyperSpeedContent<T>>>} - An array of content items.
   */
  async getRandom<T = {}>(
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
   * Fetches paginated content items from a collection.
   * @template T
   * @param {string} name - The name of the collection.
   * @param {number} limit - The number of items per page.
   * @param {number} page - The page number.
   * @param {AxiosRequestConfig} [options] - Additional Axios request options.
   * @returns {Promise<hyperSpeedCollectionPagination<T>>} - The paginated response.
   */
  async getPaginated<T = {}>(
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
   * @template T
   * @param {string} name - The name of the collection.
   * @param {string} slug - The slug of the content item.
   * @param {AxiosRequestConfig} [options] - Additional Axios request options.
   * @returns {Promise<hyperSpeedPageContent<T>>} - The content item data.
   */
  async getContentBySlug<T = {}>(
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
