import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReportService {
  constructor(private prisma: PrismaService) {}

  async getStockPortfolio() {
    const stock = await this.prisma.stockPortfolio.findMany({
      // take: 25,
    });

    return stock;
  }
}
