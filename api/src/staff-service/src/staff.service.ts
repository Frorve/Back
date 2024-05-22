import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class StaffService {
  async findAll() {
    const response = await axios.get('http://localhost:8055/items/staff');
    return response.data;
  }

}
