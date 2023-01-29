/* eslint-disable prettier/prettier */
// in invoice.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type InvoiceDocument = HydratedDocument<Invoice>;

@Schema({ timestamps: true })
export class Invoice {
  @Prop({
    required: true,
    type: Object,
  })
  booking: {
    amount: number;
  };

  @Prop({
    required: true,
    type: Object,
  })
  repair: {
    amount: number;
  };

  @Prop({
    required: true,
    type: Object,
  })
  sentToShipper: {
    amount: number;
  };
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
