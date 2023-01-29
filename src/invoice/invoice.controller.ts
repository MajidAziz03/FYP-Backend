/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';
import {
  Controller,
  Put,
  Req,
  UseGuards,
  Patch,
  Query,
  Post,
  Get,
  Header,
  Res,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { InvoiceService } from './invoice.service';

@Controller('invoices')
export class InvoiceController {
  constructor(private Invoiceervice: InvoiceService) {}

  @Post('')
  createClient(@Body() reqBody: any) {
    return this.Invoiceervice.create(reqBody);
  }

  @Get('findAll')
  getAllInvoice() {
    return this.Invoiceervice.getAllInvoices();
  }

  @Get(':id')
  getClient(@Param('id') userId: string) {
    return this.Invoiceervice.getInvoice(userId);
  }

  @Delete(':id')
  deleteClient(@Param('id') userId: string) {
    return this.Invoiceervice.deleteInvoice(userId);
  }

  @Put(':id')
  updateClient(@Param('id') userId, @Body() data) {
    return this.Invoiceervice.updateInvoice(userId, data);
  }
}
