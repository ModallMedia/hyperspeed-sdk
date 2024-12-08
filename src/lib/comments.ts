// src/comments.ts

import axios, { AxiosInstance } from "axios";

const url = "https://hyperspeedcms.com/api/v2";
export interface CommentPayload {
  author: string;
  email: string;
  parent_id: number | null | undefined;
  comment: string;
}

export interface CommentSuccessResponse {
  success: true;
  message: string;
}

export interface MessageErrorResponse {
  error: string;
}

export type MessageResponse = CommentSuccessResponse | MessageErrorResponse;

export class Comment {
  private api_key: string;
  private organization: number;
  private axiosInstance: AxiosInstance;

  /**
   * Creates an instance of Comments.
   * @param {string} api_key - The API key for authentication.
   * @param {number} organization - The organization ID.
   */
  constructor(api_key: string, organization: number) {
    this.api_key = api_key;
    this.organization = organization;

    // Create an Axios instance with default headers
    this.axiosInstance = axios.create({
      baseURL: url + "/comments",
      headers: {
        Authorization: `Bearer ${this.api_key}`,
        "Organization-Id": this.organization.toString(),
        "Content-Type": "application/json",
      },
    });
  }

  /**
   * Creates a new Comment.
   
   * @param {string} content_id - The id of the parent post
  * @param data - {
   * author: string;
   * email: string;
   * parent_id: number | null | undefined;
   * comment: string; - The message data to send.
   } The message data to send.
  * @returns {Promise<MessageResponse>} - A promise that resolves to the API response.
   */
  async create(
    content_id: string | number,
    data: CommentPayload
  ): Promise<MessageResponse> {
    try {
      const response = await this.axiosInstance.post(`/${content_id}`, data);
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
