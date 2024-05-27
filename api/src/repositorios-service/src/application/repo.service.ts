import { Injectable, Param } from '@nestjs/common';
import axios, { AxiosRequestConfig } from 'axios';
import { CreateRepoDto } from '../infrastructure/dto/create-repo.dto';
import { UpdateRepoDto } from '../infrastructure/dto/update-repo.dto';
import { GlobalService } from 'src/directus/src/application/global.service';
@Injectable()
export class RepoService {
  private readonly baseUrl: string = `${process.env.DIRECTUS_URL_REPO}`;

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

  async create(createRepoDto: CreateRepoDto) {
    const config: AxiosRequestConfig = {
      headers: this.getAuthHeader(),
    };
    const response = await axios.post(this.baseUrl, createRepoDto, config);
    return response.data;
  }

  async update(id: string, updateRepoDto: UpdateRepoDto) {
    const config: AxiosRequestConfig = {
      headers: this.getAuthHeader(),
    };
    const response = await axios.patch(`${this.baseUrl}/${id}`, updateRepoDto, config);
    return response.data;
  }

  async delete(id: string) {
    const config: AxiosRequestConfig = {
      headers: this.getAuthHeader(),
    };
    const response = await axios.delete(`${this.baseUrl}/${id}`, config);
    return response.data;
  }

  async getReposByAuthor(username: string) {
    const config: AxiosRequestConfig = {
      headers: this.getAuthHeader(),
    };
    const response = await axios.get(`${this.baseUrl}?fields=*.*&filter={"autor":{"_eq":"${username}"}}`, config);
    return response.data;
  }

  async getReposByCollaborator(username: string) {
    const config: AxiosRequestConfig = {
      headers: this.getAuthHeader(),
    };
    const response = await axios.get(`${this.baseUrl}?fields=*.*&filter={"colaboradores":{"_contains":"${username}"}}`, config);
    return response.data;
  }

  async getTimeByProject(id: string) {
    const config: AxiosRequestConfig = {
      headers: this.getAuthHeader(),
    };
    const response = await axios.get(`${this.baseUrl}/${id}?fields=time`, config);
    return response.data;
  }

  async updateTimeByProject(id: string, updateRepoDto: UpdateRepoDto) {
    const config: AxiosRequestConfig = {
      headers: this.getAuthHeader(),
    };
    const response = await axios.patch(`${this.baseUrl}/${id}?fields=time`, updateRepoDto, config);
    return response.data;
  }

  async getCollaboratorByRepo(id: string) {
    const config: AxiosRequestConfig = {
      headers: this.getAuthHeader(),
    };
    const response = await axios.get(`${this.baseUrl}/${id}?fields=colaboradores`, config);
    return response.data;
  }

  async updateCollaboratorByRepo(id: string, updateRepoDto: UpdateRepoDto) {
    const config: AxiosRequestConfig = {
      headers: this.getAuthHeader(),
    };
    const response = await axios.patch(`${this.baseUrl}/${id}?fields=colaboradores`, updateRepoDto, config);
    return response.data;
  }

  async getClientsByRepo(@Param('id') id: string) {
    const config: AxiosRequestConfig = {
      headers: this.getAuthHeader(),
    };
    const response = await axios.get(`${this.baseUrl}/${id}?fields=cliente`, config);
    return response.data;
  }

  async updateClientByRepo(@Param('id') id: string, updateRepoDto: UpdateRepoDto) {
    const config: AxiosRequestConfig = {
      headers: this.getAuthHeader(),
    };
    const response = await axios.patch(`${this.baseUrl}/${id}?fields=cliente`, updateRepoDto, config);
    return response.data;
  }
}
