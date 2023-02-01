/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientSchema } from 'src/clients/clients.model';
import { ContainerController } from './container.controller';
import { ContainerSchema } from './container.model';
import { ContainerService } from './container.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'containers', schema: ContainerSchema }, { name: 'clients', schema: ClientSchema }]),
  ],
  controllers: [ContainerController],
  providers: [ContainerService],
})
export class ContainerModule { }
