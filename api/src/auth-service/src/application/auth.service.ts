import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as dotenv from "dotenv";

dotenv.config({ path: ".develop.env" });

@Injectable()
export class AuthService {

    private accessToken: string;
    private readonly baseUrl: string = `${process.env.DIRECTUS_URL_AUTH}`;
    private readonly baseUrlReg: string = `${process.env.DIRECTUS_URL_AUTH_REGISTER}`;


    async login(credentials: any) {
        const response = await axios.post(this.baseUrl, credentials);
        this.accessToken = response.data.data.access_token;
        return response.data;
    }

    async register(credentials: any) {
        const response = await axios.post(this.baseUrlReg, credentials);
        return response.data;
    }

    getToke(): string {
        return this.accessToken
    }
}
