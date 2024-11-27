// src/collections.ts

import axios, { AxiosInstance } from "axios";

const url = "https://hyperspeedcms.com/api/v2";
export interface MessagePayload {
  email: string;
  first_name?: string;
  last_name?: string;
  phone_number?: string;
  message?: string;
  other_fields?: Array<{ [key: string]: string }>;
}

export interface MessageSuccessResponse {
  success: true;
  message: string;
}

export interface MessageErrorResponse {
  error: string;
}

export type MessageResponse = MessageSuccessResponse | MessageErrorResponse;

export class Messages {
  private api_key: string;
  private organization: number;
  private axiosInstance: AxiosInstance;

  /**
   * Creates an instance of Messages.
   * @param {string} api_key - The API key for authentication.
   * @param {number} organization - The organization ID.
   */
  constructor(api_key: string, organization: number) {
    this.api_key = api_key;
    this.organization = organization;

    // Create an Axios instance with default headers
    this.axiosInstance = axios.create({
      baseURL: url + "/messages",
      headers: {
        Authorization: `Bearer ${this.api_key}`,
        "Organization-Id": this.organization.toString(),
        "Content-Type": "application/json",
      },
    });
  }

  /**
   * Creates a new message.
   * @param {MessagePayload} data - The message data to send.
   * @returns {Promise<MessageResponse>} - A promise that resolves to the API response.
   */
  async create(data: MessagePayload): Promise<MessageResponse> {
    try {
      const response = await this.axiosInstance.post("/", data);
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
