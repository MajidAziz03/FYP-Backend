/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ContainerDocument = HydratedDocument<Container>;

@Schema({ timestamps: true })
export class Container {
  @Prop({ required: true, unique: true })
  ContainerId: string;
}

export const ContainerSchema = SchemaFactory.createForClass(Container);
