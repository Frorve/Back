import { Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig } from 'axios';
import { CreateStaffDto } from '../infrastructure/dto/create-staff.dto';
import * as dotenv from "dotenv";
import { GlobalService } from 'src/directus/src/application/global.service';


dotenv.config({ path: ".develop.env" });

@Injectable()
export class StaffService {

  private readonly baseUrl: string = `${process.env.DIRECTUS_URL_STAFF}`;

  private getAuthHeader() {
    const token = GlobalService.token;
    return { Authorization: `Bearer ${token}` };
  }

  async findAll() {
    const response = await axios.get(this.baseUrl);
    return response.data;
  }

  async create(createStaffDto: CreateStaffDto) {
    const response = await axios.post(this.baseUrl, createStaffDto);
    return response.data;
  }

  async findAllByName() {
    const config: AxiosRequestConfig = {
      headers: this.getAuthHeader(),
    };
    const response = await axios.get(`${this.baseUrl}?fields=nombre`, config);
    return response.data;
  }

}
