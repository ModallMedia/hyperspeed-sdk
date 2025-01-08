// src/content.ts

import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import {
  HyperspeedContentPagination,
  HyperspeedContent,
  HyperspeedContentSingle,
  HyperspeedCategoryContentPagination,
  Category,
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
   * @returns {Promise<HyperspeedContent<T>}>} - The collection data.
   */
  async list<T = {}>(name: string): Promise<Array<HyperspeedContent<T>>> {
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
   * Fetches paginated content items from a specific category within a content collection.
   * @template T - The custom fields for the content item. Accesible via the `data` property.
   * @param {string} name - The name of the collection.
   * @param {number} limit - The number of items per page.
   * @param {number} page - The page number.
   * @param {AxiosRequestConfig} [options] - Additional Axios request options.
   * @returns {Promise<HyperspeedContentPagination<T>>} - The paginated response.
   */
  async listPaginatedByCategory<T = {}>(
    name: string,
    collection_category: string,
    limit: number,
    page: number,
    options?: AxiosRequestConfig
  ): Promise<HyperspeedCategoryContentPagination<T>> {
    try {
      const params = { limit, page };
      const response = await this.axiosInstance.get(
        `/${name}/category/${collection_category}`,
        {
          params,
          ...options,
        }
      );
      return response.data;
    } catch (error: any) {
      throw this.handleError(error);
    }
  }
  /**
   * Fetches paginated content items from a specific category within a content collection.
   * @template T - The custom fields for the content item. Accesible via the `data` property.
   * @param {string} name - The name of the collection.
   * @param {number} limit - The number of items per page.
   * @param {number} page - The page number.
   * @param {AxiosRequestConfig} [options] - Additional Axios request options.
   * @returns {Promise<HyperspeedContentPagination<T>>} - The paginated response.
   */
  async search<T = {}>(
    q: string,
    limit: number,
    page: number,
    options?: AxiosRequestConfig
  ): Promise<HyperspeedCategoryContentPagination<T>> {
    try {
      const params = { limit, page, q: encodeURIComponent(q) };
      const response = await this.axiosInstance.get(`/search`, {
        params,
        ...options,
      });
      return response.data;
    } catch (error: any) {
      throw this.handleError(error);
    }
  }
  /**
   * Fetches paginated content items from a specific category within a content collection.
   * @template T - The custom fields for the content item. Accesible via the `data` property.
   * @param {string} name - The name of the collection.
   * @param {number} limit - The number of items per page.
   * @param {number} page - The page number.
   * @param {AxiosRequestConfig} [options] - Additional Axios request options.
   * @returns {Promise<HyperspeedContentPagination<T>>} - The paginated response.
   */
  async listCategories(
    name: string,
    options?: AxiosRequestConfig
  ): Promise<Category[]> {
    try {
      const response = await this.axiosInstance.get(`/${name}/category`, {
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
   * @param {number} [page] - The page number.
   * @param {number} [limit] - The number of items to fetch.
   * @param {AxiosRequestConfig} [options] - Additional Axios request options.
   * @returns {Promise<HyperspeedContentSingle<T>>} - The content item data.
   */
  async get<T = {}>(
    name: string,
    slug: string,
    page?: number,
    limit?: number,
    options?: AxiosRequestConfig
  ): Promise<HyperspeedContentSingle<T>> {
    const params = { limit, page };
    try {
      const response = await this.axiosInstance.get(`/${name}/${slug}`, {
        params,
        ...options,
      });
      return response.data;
    } catch (error: any) {
      throw this.handleError(error);
    }
  }
  /**
   * Fetches a slug and collection path prefix from a given ID
   * Primarily used for shortening URLs. ie. <link rel='shortlink' href='https://mywebsite.com/?id=14563' />
   * @param {string} id - The content ID.
   * @param {AxiosRequestConfig} [options] - Additional Axios request options.
   * @returns {Promise<{collection: { path_prefix: string | null; }; slug: string; }>} - The content item data.
   */
  async getSlugFromID(
    id: number,
    options?: AxiosRequestConfig
  ): Promise<{
    collection: {
      path_prefix: string | null;
    };
    slug: string;
  }> {
    try {
      const response = await this.axiosInstance.get(`/content/${id}`, options);
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
   * @returns {Promise<Array<HyperspeedContent<T>>>} - An array of content items.
   */
  async listRandom<T = {}>(
    name: string,
    limit: number = 1,
    exclude?: string,
    options?: AxiosRequestConfig
  ): Promise<Array<HyperspeedContent<T>>> {
    try {
      const params = { limit, exclude };
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
