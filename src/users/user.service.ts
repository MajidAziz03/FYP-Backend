/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel('users') private userModel: Model<UserDocument>) {}

  async create(user: User): Promise<any> {
    const exists = await this.userModel.findOne({ email: user.email });
    if (exists) {
      throw new Error(`A user with this ${user.email} already exists`);
    }

    const hashedPassword = await bcrypt.hash(user.password, 12);
    user.password = hashedPassword;
    const newUser = new this.userModel(user);
    const saved = await newUser.save();
    return newUser;
  }
}
