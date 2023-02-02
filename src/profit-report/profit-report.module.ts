import { Module } from '@nestjs/common';
import { ProfitReportService } from './profit-report.service';
import { ProfitReportController } from './profit-report.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfitReportSchema } from './profit-report.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'profit', schema: ProfitReportSchema }]),
  ],
  providers: [ProfitReportService],
  controllers: [ProfitReportController],
})
export class ProfitReportModule {}
