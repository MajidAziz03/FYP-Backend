/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ContainerDocument = HydratedDocument<Container>;

@Schema()
export class Container {
  @Prop({ unique: true })
  ContainerId: string;

  @Prop({ default: Date.now() })
  date: Date;
}

export const ContainerSchema = SchemaFactory.createForClass(Container);
