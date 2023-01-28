/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Container, ContainerDocument } from './container.model';
import {
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common/exceptions';

@Injectable()
export class containerModelervice {
  constructor(
    @InjectModel('containerModel')
    private readonly containerModel: Model<ContainerDocument>,
    @InjectModel('clientModel') private readonly clientModel: Model<Container>,
  ) {}

  async addContainer(data) {
    console.log({ data });
    const exists = await this.containerModel.findOne({ containerId: data.id });

    console.log({ exists });

    if (exists) return null;

    const UserExists = await this.clientModel.findOne({
      clientId: data.clientId,
    });

    console.log({ UserExists });

    if (!UserExists) throw new BadRequestException('user does not exist.');

    const updated = await this.clientModel.updateMany(
      { clientId: data.clientId },
      { $push: { containerModel: data.id } },
    );

    console.log({ updated });

    if (updated.acknowledged) {
      const container = await new this.containerModel({
        containerId: data.id,
        date: new Date(),
        clientId: data.clientId.toString(),
      }).save();

      return container;
    }
    return null;
  }

  async getContainer(id: string) {
    const container = await this.containerModel.findById(id);

    if (!container) throw new NotFoundException('No container found');

    return container;
  }

  async updateContainer(body) {
    const container = await this.containerModel.findOneAndUpdate(
      {
        containerId: body.id,
      },
      {
        $set: { containerId: body.updatedId },
      },
    );

    console.log(container);

    if (!container) throw new NotFoundException('No container found');

    return container;
  }

  async getAllcontainerModel() {
    try {
      const clientModel = await this.containerModel.find({});
      return clientModel;
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve clientModel');
    }
  }
}
