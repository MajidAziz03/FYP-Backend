import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProfitReportService } from './profit-report.service';

@Controller('profit-report')
export class ProfitReportController {
  constructor(private readonly profitReportService: ProfitReportService) {}

  @Post('quaterly')
  async createReport(
    @Body('quarter') quarter: string,
    @Body('profit') profit: number,
  ) {
    await this.profitReportService.createReport(quarter, profit);
  }

  @Get('quaterly')
  async getReport() {
    return await this.profitReportService.getReport();
  }

  // @Get('yearly')
  // async get() {
  //   return this.profitReportService.getYearlyReport();
  // }
}
