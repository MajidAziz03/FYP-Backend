/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { ClientDocument } from './clients.model';
import { Client } from './clients.model';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel('clients') private readonly clientModel: Model<ClientDocument>,
  ) {}

  async addClient(client: Client): Promise<Client> {
    const exists = await this.clientModel.findOne({ email: client.email });
    if (exists) throw new BadRequestException('Already exists.');

    const newClient = await new this.clientModel(client).save();
    return newClient;
  }

  async getAllClients(): Promise<Client[]> {
    try {
      const clients = await this.clientModel.find({}).exec();
      return clients;
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve clients');
    }
  }

  async getClient(userId): Promise<Client> {
    try {
      const client = await this.clientModel.findById(userId);
      if (client) {
        return client;
      }
      throw new InternalServerErrorException('Cannot find Client');
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve client');
    }
  }

  async deleteClient(userId): Promise<any> {
    try {
      const client = await this.clientModel.findByIdAndDelete(userId);
      return 'Successfully Deleted';
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete client');
    }
  }

  async updateClient(userId, data): Promise<any> {
    try {
      const client = await this.clientModel.findByIdAndUpdate(userId, data, {
        new: true,
      });
      return client;
    } catch (error) {
      throw new InternalServerErrorException('Failed to Update Client');
    }
  }
}
