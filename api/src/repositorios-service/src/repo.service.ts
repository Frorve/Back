import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class RepoService {
  async findAll() {
    const response = await axios.get('http://localhost:8055/items/repo');
    return response.data;
  }

}
