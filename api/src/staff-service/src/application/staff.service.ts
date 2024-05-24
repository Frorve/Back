import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateStaffDto } from '../infrastructure/dto/create-staff.dto';
import * as dotenv from "dotenv";

dotenv.config({ path: ".develop.env" });

@Injectable()
export class StaffService {

  private readonly baseUrl: string = `${process.env.DIRECTUS_URL_STAFF}`;

  async findAll() {
    const response = await axios.get(this.baseUrl);
    return response.data;
  }

  async create(createStaffDto: CreateStaffDto) {
    const response = await axios.post(this.baseUrl, createStaffDto);
    return response.data;
  }

  async findAllByName() {
    const response = await axios.get(`${this.baseUrl}?fields=nombre`);
    return response.data;
  }

}
