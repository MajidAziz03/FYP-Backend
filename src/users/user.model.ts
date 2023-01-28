/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsString, Length, IsNotEmpty } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @IsString()
  @Prop()
  name: string;

  @IsNotEmpty({ message: 'Email Cannot be Blank' })
  @IsEmail()
  @Prop({ required: true, unique: true })
  email: string;

  @IsNotEmpty()
  @Length(6, 100, { message: 'Password must be Contain 6 characters' })
  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
