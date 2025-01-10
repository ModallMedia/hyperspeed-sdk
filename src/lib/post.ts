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
export class Posts {
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
      baseURL: url + "/content",
      headers: {
        Authorization: `Bearer ${this.api_key}`,
        "Organization-Id": this.organization.toString(),
        "Content-Type": "application/json",
      },
    });
  }

  async get<T = {}>(
    slug: string,
    page?: number,
    limit?: number,
    options?: AxiosRequestConfig
  ): Promise<HyperspeedContentSingle<T>> {
    const params = { limit, page };
    try {
      const response = await this.axiosInstance.get(`/content/${slug}`, {
        params,
        ...options,
      });
      return response.data;
    } catch (error: any) {
      throw this.handleError(error);
    }
  }
 
  private handleError(error: any): Error {
    if (error.response && error.response.data && error.response.data.error) {
      return new Error(error.response.data.error);
    }
    return new Error(error.message);
  }
}
