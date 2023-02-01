/* eslint-disable prettier/prettier */

import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { Container } from './container.model';

@Injectable()
export class ContainerService {
  constructor(
    @InjectModel('containers')
    private containerModel: Model<Container>,
  ) {}

  async addContainer(cont): Promise<Container> {
    const newContainer = new this.containerModel(cont);
    const saved = await newContainer.save();
    return newContainer;
  }
}
