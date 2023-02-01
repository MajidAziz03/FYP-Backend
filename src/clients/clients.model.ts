/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IsEmail, IsNotEmpty } from 'class-validator';

export type ClientDocument = HydratedDocument<Client>;

@Schema({ timestamps: true })
export class Client {
  @Prop()
  name: string;

  @Prop({ type: Array<string> })
  containers: string;

  @IsNotEmpty({ message: 'Email Cannot be Blank' })
  @Prop({ required: true, unique: true })
  email: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
