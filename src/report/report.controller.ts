/* eslint-disable prettier/prettier */

import { Controller, Get } from '@nestjs/common';
import { Client } from 'src/clients/clients.model';
import { Container } from 'src/containers/container.model';
import { ReportService } from './report.service';

@Controller('reports')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get('weekly/container')
  async getWeeklyReport(): Promise<Container[]> {
    return await this.reportService.generateWeeklyReport();
  }

  @Get('monthly/container')
  async getMonthlyReport(): Promise<Container[]> {
    return await this.reportService.generateMonthlyReport();
  }

  @Get('weekly/client')
  async get(): Promise<Client[]> {
    return await this.reportService.generateWeeklyClientReport();
  }

  @Get('monthly/client')
  async getMonthly(): Promise<Client[]> {
    return await this.reportService.generateMonthlyClientReport();
  }
}