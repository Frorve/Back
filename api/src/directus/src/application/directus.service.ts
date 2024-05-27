import { Injectable } from '@nestjs/common';

@Injectable()
export class DirectusService {
  private token: string;

  setToken(token: string): void {
    this.token = token;    
  }

  getToken(): string {
    return this.token;
  }
}
