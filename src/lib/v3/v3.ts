// src/collections.ts
import { Prisma } from "@hyperspeed/prisma-types";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
const url = "https://hyperspeedcms.com/api/v3";

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
  async findFirst<T extends Prisma.authorFindFirstArgs>(
    props: T
  ): Promise<Prisma.authorGetPayload<T> | null> {
    const response = await this.axiosInstance.post("/find-first", props);
    return response.data;
  }

  async findMany<T extends Prisma.authorFindManyArgs>(
    props: T
  ): Promise<Prisma.authorGetPayload<T>[]> {
    const response = await this.axiosInstance.post(`/find-many`, props);
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
  async findFirst<T extends Prisma.ContentFindFirstArgs>(
    props: T
  ): Promise<Prisma.ContentGetPayload<T> | null> {
    const response = await this.axiosInstance.post("/find-first", props);
    return response.data;
  }

  async findMany<T extends Prisma.ContentFindManyArgs>(
    props: T
  ): Promise<Prisma.ContentGetPayload<T>[]> {
    const response = await this.axiosInstance.post(`/find-many`, props);
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
    this.axiosInstance = axios.create({
      baseURL: url + "/collections",
      headers: {
        Authorization: `Bearer ${this.api_key}`,
        "Organization-Id": this.organization.toString(),
        "Content-Type": "application/json",
      },
    });
  }
  async findFirst<T extends Prisma.CollectionFindFirstArgs>(
    props: T
  ): Promise<Prisma.CollectionGetPayload<T> | null> {
    const response = await this.axiosInstance.post("/find-first", props);
    return response.data;
  }
  async findMany<T extends Prisma.CollectionFindManyArgs>(
    props: T
  ): Promise<Prisma.CollectionGetPayload<T>[]> {
    const response = await this.axiosInstance.post(`/find-many`, props);
    return response.data;
  }
}
export class LinksV3 {
  private api_key: string;
  private organization: number;
  private axiosInstance: AxiosInstance;
  constructor(api_key: string, organization: number) {
    this.api_key = api_key;
    this.organization = organization;
    this.axiosInstance = axios.create({
      baseURL: url + "/links",
      headers: {
        Authorization: `Bearer ${this.api_key}`,
        "Organization-Id": this.organization.toString(),
        "Content-Type": "application/json",
      },
    });
  }
  async findFirst<T extends Prisma.LinkPageFindFirstArgs>(
    props: T
  ): Promise<Prisma.LinkPageGetPayload<T> | null> {
    const response = await this.axiosInstance.post("/find-first", props);
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
    this.axiosInstance = axios.create({
      baseURL: url + "/categories",
      headers: {
        Authorization: `Bearer ${this.api_key}`,
        "Organization-Id": this.organization.toString(),
        "Content-Type": "application/json",
      },
    });
  }
  async findFirst<T extends Prisma.CategoryFindFirstArgs>(
    props: T
  ): Promise<Prisma.CategoryGetPayload<T> | null> {
    const response = await this.axiosInstance.post("/find-first", props);
    return response.data;
  }
  async findMany<T extends Prisma.CategoryFindManyArgs>(
    props: T
  ): Promise<Prisma.CategoryGetPayload<T>[]> {
    const response = await this.axiosInstance.post(`/find-many`, props);
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
    this.axiosInstance = axios.create({
      baseURL: url + "/comments",
      headers: {
        Authorization: `Bearer ${this.api_key}`,
        "Organization-Id": this.organization.toString(),
        "Content-Type": "application/json",
      },
    });
  }
  async findFirst<T extends Prisma.CommentFindFirstArgs>(
    props: T
  ): Promise<Prisma.CommentGetPayload<T> | null> {
    const response = await this.axiosInstance.post("/find-first", props);
    return response.data;
  }
  async findMany<T extends Prisma.CommentFindManyArgs>(
    props: T
  ): Promise<Prisma.CommentGetPayload<T>[]> {
    const response = await this.axiosInstance.post(`/find-many`, props);
    return response.data;
  }
  async create<T extends Prisma.CommentCreateArgs>(
    props: T
  ): Promise<Prisma.CommentGetPayload<T>> {
    const response = await this.axiosInstance.post(`/create`, props);
    return response.data;
  }
}
