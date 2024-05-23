import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as dotenv from "dotenv";

dotenv.config({ path: ".develop.env" });

@Injectable()
export class AuthService {

    private readonly baseUrl: string = `${process.env.DIRECTUS_URL_AUTH}`;
    private readonly baseUrlReg: string = `${process.env.DIRECTUS_URL_AUTH_REGISTER}`;


    async login(credentials: any) {
        const response = await axios.post(this.baseUrl, credentials);
        return response.data;
    }

    async register(credentials: any) {
        const response = await axios.post(this.baseUrlReg, credentials);
        return response.data;
    }
}
