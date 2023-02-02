import { Test, TestingModule } from '@nestjs/testing';
import { ProfitReportService } from './profit-report.service';

describe('ProfitReportService', () => {
  let service: ProfitReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfitReportService],
    }).compile();

    service = module.get<ProfitReportService>(ProfitReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
