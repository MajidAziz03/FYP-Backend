/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { Invoice } from './invoice.dto';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectModel('invoices')
    private readonly invoiceModel: Model<Invoice>,
  ) {}

  async create(invoice: Invoice): Promise<Invoice> {
    const newInvoice = await new this.invoiceModel(invoice).save();
    return newInvoice;
  }

  async getAllInvoices(): Promise<Invoice[]> {
    try {
      const invoice = await this.invoiceModel.find({}).exec();
      return invoice;
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve invoices');
    }
  }

  async getInvoice(InvoiceId): Promise<Invoice> {
    try {
      const Invoice = await this.invoiceModel.findById(InvoiceId);
      if (Invoice) {
        return Invoice;
      }
      throw new InternalServerErrorException('Cannot find Invoice');
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve Invoice');
    }
  }

  async deleteInvoice(InvoiceId): Promise<any> {
    try {
      const Invoice = await this.invoiceModel.findByIdAndDelete(InvoiceId);
      return 'Successfully Deleted';
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete Invoice');
    }
  }

  async updateInvoice(InvoiceId, data): Promise<any> {
    try {
      const Invoice = await this.invoiceModel.findByIdAndUpdate(
        InvoiceId,
        data,
        {
          new: true,
        },
      );
      return Invoice;
    } catch (error) {
      throw new InternalServerErrorException('Failed to Update Invoice');
    }
  }
}
