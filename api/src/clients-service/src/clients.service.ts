import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import * as dotenv from "dotenv";

dotenv.config({ path: ".develop.env" });

@Injectable()
export class ClientsService {

  private readonly baseUrl: string = `${process.env.DIRECTUS_URL_CLIENTS}`;

  async findAll() {
    const response = await axios.get(this.baseUrl);
    return response.data;
  }

  async create(createClienteDto: CreateClienteDto) {
    const response = await axios.post(this.baseUrl, createClienteDto);
    return response.data;
  }

  async update(id: string, updateClienteDto: UpdateClienteDto) {
    const response = await axios.patch(`${this.baseUrl}/${id}`, updateClienteDto);
    return response.data;
  }

  async delete(id: string) {
    const response = await axios.delete(`${this.baseUrl}/${id}`);
    return response.data;
  }

  async findAllByName() {
    const response = await axios.get(`${this.baseUrl}?fields=nombre`);
    return response.data;
  }
  
}
