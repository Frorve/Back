import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AuthService {
    async login(credentials: any) {
        const response = await axios.post('http://localhost:8055/auth/login', credentials);
        return response.data;
    }
}
