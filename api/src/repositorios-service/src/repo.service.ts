import { Injectable, Param } from '@nestjs/common';
import axios from 'axios';
import { CreateRepoDto } from './dto/create-repo.dto';
import { UpdateRepoDto } from './dto/update-repo.dto';

@Injectable()
export class RepoService {

  private readonly baseUrl: string = `${process.env.DIRECTUS_URL_REPO}`;

  async findAll() {
    const response = await axios.get(this.baseUrl);
    return response.data;
  }

  async create(createRepoDto: CreateRepoDto) {
    const response = await axios.post(this.baseUrl, createRepoDto);
    return response.data;
  }

  async update(id: string, updateRepoDto: UpdateRepoDto) {
    const response = await axios.patch(`${this.baseUrl}/${id}`, updateRepoDto);
    return response.data;
  }

  async delete(id: string) {
    const response = await axios.delete(`${this.baseUrl}/${id}`);
    return response.data;
  }

  async getReposByAuthor(username: string) {
    const response = await axios.get(`${this.baseUrl}?fields=*.*&filter={"autor":{"_eq":"${username}"}}`);
    return response.data;
  }

  async getReposByCollaborator(username: string) {
    const response = await axios.get(`${this.baseUrl}?fields=*.*&filter={"colaboradores":{"_contains":"${username}"}}`);
    return response.data;
  }

  async getTimeByProject (id: string) {
    const response = await axios.get(`${this.baseUrl}/${id}?fields=time`);
    return response.data
  }

  async UpdateTimeByProject (id: string, updateRepoDto: UpdateRepoDto) {
    const response = await axios.patch(`${this.baseUrl}/${id}?fields=time`, updateRepoDto);
    return response.data;
  }

  async getCollaboratorByRepo (id: string) {
    const response = await axios.get(`${this.baseUrl}/${id}?fields=colaboradores`);
    return response.data;
  }

  async UpdateCollaboratorByRepo (id: string, updateRepoDto: UpdateRepoDto) {
    const response = await axios.patch(`${this.baseUrl}/${id}?fields=colaboradores`, updateRepoDto);
    return response.data;
  }

  async getClientsByRepo(@Param('id') id: string) {
    const response = await axios.get(`${this.baseUrl}/${id}?fields=cliente`);
    return response.data;
  }

  async UpdateClientByRepo(@Param('id') id: string, updateRepoDto: UpdateRepoDto) {
    const response = await axios.patch(`${this.baseUrl}/${id}?fields=cliente`, updateRepoDto);
    return response.data;
  }

}
