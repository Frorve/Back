import { Injectable } from '@nestjs/common';

@Injectable()
export class DirectusService {
  private token: string;

  setToken(token: string): void {
    console.log('Setting token in DirectusService:', token); // Debug log
    this.token = token;    
  }

  getToken(): string {
    console.log('Getting token from DirectusService:', this.token); // Debug log
    return this.token;
  }
}
