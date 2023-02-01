/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ReportSchema } from './report.model';
import { ContainerSchema } from 'src/containers/container.model';
import { ClientSchema } from 'src/clients/clients.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'reports', schema: ReportSchema }]),
    MongooseModule.forFeature([
      { name: 'containers', schema: ContainerSchema },
    ]),
    MongooseModule.forFeature([{ name: 'clients', schema: ClientSchema }]),
  ],
  providers: [ReportService],
  controllers: [ReportController],
})
export class ReportModule {}
