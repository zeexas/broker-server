import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class StockPortfolioDto {
  @IsString()
  @IsNotEmpty()
  client_name: string;

  @IsEmail()
  @IsNotEmpty()
  client_email: string;

  @IsString()
  @IsNotEmpty()
  stock_name: string;

  @IsString()
  @IsNotEmpty()
  stock_market: string;

  @IsString()
  @IsNotEmpty()
  currency: string;

  @IsString()
  @IsNotEmpty()
  amount: string;
}
