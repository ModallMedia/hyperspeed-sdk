// src/collections.ts
import { Prisma } from "../prisma-types";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
const url = "https://hyperspeedcms.com/api/v3";

// Prisma types DateTime fields as `Date`, but every response here travels
// over HTTP as JSON, so dates actually arrive as ISO strings.
// This utility type recursively converts all Date fields in a type to string, so that the return types of these methods are accurate.
type SerializeDates<T> = T extends Date
	? string
	: T extends (infer U)[]
		? SerializeDates<U>[]
		: T extends object
			? { [K in keyof T]: SerializeDates<T[K]> }
			: T;

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
		props: T,
	): Promise<SerializeDates<Prisma.authorGetPayload<T>> | null> {
		const response = await this.axiosInstance.post("/find-first", props);
		return response.data;
	}

	async findMany<T extends Prisma.authorFindManyArgs>(
		props: T,
	): Promise<SerializeDates<Prisma.authorGetPayload<T>>[]> {
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
		props: T,
	): Promise<SerializeDates<Prisma.ContentGetPayload<T>> | null> {
		const response = await this.axiosInstance.post("/find-first", props);
		return response.data;
	}

	async findMany<T extends Prisma.ContentFindManyArgs>(
		props: T,
	): Promise<SerializeDates<Prisma.ContentGetPayload<T>>[]> {
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
		props: T,
	): Promise<SerializeDates<Prisma.CollectionGetPayload<T>> | null> {
		const response = await this.axiosInstance.post("/find-first", props);
		return response.data;
	}
	async findMany<T extends Prisma.CollectionFindManyArgs>(
		props: T,
	): Promise<SerializeDates<Prisma.CollectionGetPayload<T>>[]> {
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
		props: T,
	): Promise<SerializeDates<Prisma.LinkPageGetPayload<T>> | null> {
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
		props: T,
	): Promise<SerializeDates<Prisma.CategoryGetPayload<T>> | null> {
		const response = await this.axiosInstance.post("/find-first", props);
		return response.data;
	}
	async findMany<T extends Prisma.CategoryFindManyArgs>(
		props: T,
	): Promise<SerializeDates<Prisma.CategoryGetPayload<T>>[]> {
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
		props: T,
	): Promise<SerializeDates<Prisma.CommentGetPayload<T>> | null> {
		const response = await this.axiosInstance.post("/find-first", props);
		return response.data;
	}
	async findMany<T extends Prisma.CommentFindManyArgs>(
		props: T,
	): Promise<SerializeDates<Prisma.CommentGetPayload<T>>[]> {
		const response = await this.axiosInstance.post(`/find-many`, props);
		return response.data;
	}
	async create<T extends Prisma.CommentCreateArgs>(
		props: T,
	): Promise<SerializeDates<Prisma.CommentGetPayload<T>>> {
		const response = await this.axiosInstance.post(`/create`, props);
		return response.data;
	}
}
