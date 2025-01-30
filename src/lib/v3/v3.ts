// src/collections.ts

import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
const url = "https://hyperspeedcms.com/api/v3";

type Props = {
  select?: any;
  include?: any;
  where?: any;
  orderBy?: any;
  cursor?: any;
  take?: any;
  skip?: any;
  distinct?: any;
};

type Create = {
  data?: any;
  include?: any;
  select?: any;
};
export class AuthorsV3 {
  private api_key: string;
  private organization: number;
  private axiosInstance: AxiosInstance;
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
  async findFirst(props: Props) {
    const response = await this.axiosInstance.post("/find-many", props);
    return response.data;
  }
  async findMany(props: Props) {
    const response = await this.axiosInstance.post(`/find-first`, props);
    return response.data;
  }
}
export class ContentV3 {
  private api_key: string;
  private organization: number;
  private axiosInstance: AxiosInstance;
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
  async findFirst(props: Props) {
    const response = await this.axiosInstance.post("/find-many", props);
    return response.data;
  }
  async findMany(props: Props) {
    const response = await this.axiosInstance.post(`/find-first`, props);
    return response.data;
  }
}
export class CollectionsV3 {
  private api_key: string;
  private organization: number;
  private axiosInstance: AxiosInstance;
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
  async findFirst(props: Props) {
    const response = await this.axiosInstance.post("/find-many", props);
    return response.data;
  }
  async findMany(props: Props) {
    const response = await this.axiosInstance.post(`/find-first`, props);
    return response.data;
  }
}
export class CategoriesV3 {
  private api_key: string;
  private organization: number;
  private axiosInstance: AxiosInstance;
  constructor(api_key: string, organization: number) {
    this.api_key = api_key;
    this.organization = organization;
    // Create an Axios instance with default headers
    this.axiosInstance = axios.create({
      baseURL: url + "/categories",
      headers: {
        Authorization: `Bearer ${this.api_key}`,
        "Organization-Id": this.organization.toString(),
        "Content-Type": "application/json",
      },
    });
  }
  async findFirst(props: Props) {
    const response = await this.axiosInstance.post("/find-many", props);
    return response.data;
  }
  async findMany(props: Props) {
    const response = await this.axiosInstance.post(`/find-first`, props);
    return response.data;
  }
}

export class CommentsV3 {
  private api_key: string;
  private organization: number;
  private axiosInstance: AxiosInstance;
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
  async findFirst(props: Props) {
    const response = await this.axiosInstance.post("/find-many", props);
    return response.data;
  }
  async findMany(props: Props) {
    const response = await this.axiosInstance.post(`/find-first`, props);
    return response.data;
  }
  async create(props: Create) {
    const response = await this.axiosInstance.post(`/create`, props);
    return response.data;
  }
}
