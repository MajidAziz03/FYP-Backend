/* eslint-disable prettier/prettier */

import { Controller, Body, Post } from '@nestjs/common';
import { ContainerService } from './container.service';
import { Container } from './container.model';

@Controller('containers')
export class ContainerController {
  constructor(private containerService: ContainerService) {}

  @Post('')
  async create(@Body() reqBody : Container) {
    return this.containerService.addContainer(reqBody);
  }
}
