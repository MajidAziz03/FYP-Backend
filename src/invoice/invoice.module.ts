/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InvoiceController } from './invoice.controller';
import { InvoiceSchema } from './invoice.model';
import { InvoiceService } from './invoice.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'invoices', schema: InvoiceSchema }]),
  ],
  providers: [InvoiceService],
  controllers: [InvoiceController],
})
export class InvoiceModule {}
