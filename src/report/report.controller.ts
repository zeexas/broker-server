import { Controller, Get } from '@nestjs/common';
import { ReportService } from './report.service';

@Controller('report')
export class ReportController {
  constructor(private reportService: ReportService) {}

  @Get('month/stock')
  getStockPortfolio() {
    console.log('Get stock portfolio');

    return this.reportService.getStockPortfolio();
  }
}
