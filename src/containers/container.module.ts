/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContainerController } from './container.controller';
import { ContainerSchema } from './container.model';
import { ContainerService } from './container.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'containers', schema: ContainerSchema },
    ]),
  ],
  controllers: [ContainerController],
  providers: [ContainerService],
})
export class ContainerModule {}
