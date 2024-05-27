import { Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig } from 'axios';
import { CreateClienteDto } from '.././infrastructure/dto/create-cliente.dto';
import { UpdateClienteDto } from '.././infrastructure/dto/update-cliente.dto';
import * as dotenv from "dotenv";
import { GlobalService } from 'src/directus/src/application/global.service';

dotenv.config({ path: ".develop.env" });

@Injectable()
export class ClientsService {

  private readonly baseUrl: string = `${process.env.DIRECTUS_URL_CLIENTS}`;


  private getAuthHeader() {
    const token = GlobalService.token;
    return { Authorization: `Bearer ${token}` };
  }

  async findAll() {
    const config: AxiosRequestConfig = {
      headers: this.getAuthHeader(),
    };
    const response = await axios.get(this.baseUrl, config);
    return response.data;
  }

  async create(createClienteDto: CreateClienteDto) {
    const config: AxiosRequestConfig = {
      headers: this.getAuthHeader(),
    };
    const response = await axios.post(this.baseUrl, createClienteDto, config);
    return response.data;
  }

  async update(id: string, updateClienteDto: UpdateClienteDto) {
    const config: AxiosRequestConfig = {
      headers: this.getAuthHeader(),
    };
    const response = await axios.patch(`${this.baseUrl}/${id}`, updateClienteDto, config);
    return response.data;
  }

  async delete(id: string) {
    const config: AxiosRequestConfig = {
      headers: this.getAuthHeader(),
    };
    const response = await axios.delete(`${this.baseUrl}/${id}`, config);
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
