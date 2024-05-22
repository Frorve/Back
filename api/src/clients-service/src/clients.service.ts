import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ClientsService {
  async findAll() {
    const response = await axios.get('https://http://localhost:8055/items/clients');
    return response.data;
  }

}
