import { Injectable } from "@nestjs/common";
import axios from "axios";
import * as dotenv from "dotenv";
import { CreateUserDto } from "./dto/create-user.dto";

dotenv.config({ path: ".develop.env" });

@Injectable()
export class UserService {
  private readonly baseUrl: string = `${process.env.DIRECTUS_URL_REGISTER}`;

  async findAll() {
    const response = await axios.get(this.baseUrl);
    return response.data;
  }

  async findMe() {
    const response = await axios.get(`${this.baseUrl}/me`);
    return response.data;
  }

  async create(createUserDto: CreateUserDto) {
    const response = await axios.post(this.baseUrl, createUserDto);
    return response.data;
  }
}
