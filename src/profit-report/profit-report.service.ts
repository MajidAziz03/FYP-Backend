/* eslint-disable prettier/prettier */
import { ProfitReport } from './profit-report.model';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class ProfitReportService {
  constructor(
    @InjectModel('profit') private readonly profitModel: Model<ProfitReport>,
  ) {}

  // quaterly report
  async createReport(quarter: string, profit: number): Promise<any> {
    const report = new this.profitModel({ quarter, profit });
    const saved = report.save();
    return report;
  }

  // quaterly get report

  async getReport(): Promise<ProfitReport[]> {
    return await this.profitModel.find().exec();
  }

  // yearly report

  // async getYearlyReport(): Promise<any> {
  //   const reports = await this.getReport();
  //   const yearlyReport = reports.reduce((acc, report) => {
  //     const year = report.quarter.split(' ')[1];
  //     acc[year] = (acc[year] || 0) + report.profit;
  //     return acc;
  //   }, {} as Record<string, number>);

  //   return yearlyReport;
  // }

}


