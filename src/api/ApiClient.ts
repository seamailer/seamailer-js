import { SeaConfig } from "../types/sea.types";

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface RequestOptions<T> {
    method?: RequestMethod;
    headers?: Record<string, string>;
    body?: T;
    queryParams?: Record<string, string | number | boolean>;
}

export class ApiClient {
    constructor(private seaConfig: SeaConfig) {}

    async post<TResponse, TBody = undefined>(
        url: string,
        options: RequestOptions<TBody> = {},
    ): Promise<TResponse> {
        return this.fetch(url, { ...options, method: "POST" })
    }

    async patch<TResponse, TBody = undefined>(
        url: string,
        options: RequestOptions<TBody> = {},
    ): Promise<TResponse> {
        return this.fetch(url, { ...options, method: "PATCH" })
    }

    async get<TResponse, TBody = undefined>(
        url: string,
        options: RequestOptions<TBody> = {},
    ): Promise<TResponse> {
        return this.fetch(url, { ...options, method: "GET" })
    }

    async fetch<TResponse, TBody = undefined>(
        url: string,
        options: RequestOptions<TBody> = {},
    ): Promise<TResponse> {
        const { method = 'GET', headers = {}, body, queryParams } = options;

        // Construct query parameters if provided
        const queryString = queryParams
            ? '?' +
            new URLSearchParams(
                Object.entries(queryParams).map(([key, value]) => [key, String(value)])
            ).toString()
            : '';

        const fullUrl = `${this.seaConfig.baseUrl}${url}${queryString}`;

        const fetchOptions: RequestInit = {
            method,
            headers: {
                ...headers,
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.seaConfig.apiKey}`,
            },
            body: body ? JSON.stringify(body) : undefined,
        };

        try {
            const response = await fetch(fullUrl, fetchOptions);

            if (!response.ok) {
                const errorBody = await response.text();
                throw new Error(
                    `HTTP error! status: ${response.status}, body: ${errorBody}`
                );
            }
            // Attempt to parse JSON response if available
            return (await response.json()) as TResponse;
        } catch (error) {
            // Handle network or parsing errors
            throw new Error(`Network request failed: ${error}`);
        }
    }
}

