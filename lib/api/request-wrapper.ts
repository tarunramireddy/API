import { APIRequestContext, APIResponse } from '@playwright/test';
import { env } from '../config/env';

export class RequestWrapper {
    constructor(private request: APIRequestContext) { }

    private get headers(): Record<string, string> {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json'
        };
        if (env.API_KEY && env.API_KEY !== 'your_api_key_here' && env.API_KEY.trim() !== '') {
            headers['x-api-key'] = env.API_KEY.trim();
        }
        return headers;
    }

    async get(url: string, params?: { [key: string]: string | number | boolean }): Promise<APIResponse> {
        return await this.request.get(url, { params, headers: this.headers });
    }

    async post(url: string, data: any): Promise<APIResponse> {
        return await this.request.post(url, { data, headers: this.headers });
    }

    async put(url: string, data: any): Promise<APIResponse> {
        return await this.request.put(url, { data, headers: this.headers });
    }

    async delete(url: string): Promise<APIResponse> {
        return await this.request.delete(url, { headers: this.headers });
    }


}
