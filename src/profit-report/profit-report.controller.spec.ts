import { Test, TestingModule } from '@nestjs/testing';
import { ProfitReportController } from './profit-report.controller';

describe('ProfitReportController', () => {
  let controller: ProfitReportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfitReportController],
    }).compile();

    controller = module.get<ProfitReportController>(ProfitReportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
