/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.model';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('users') private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async create(user: User): Promise<any> {
    const exists = await this.userModel.findOne({ email: user.email });
    if (exists) {
      throw new Error(`A user with this ${user.email} already exists`);
    }

    const hashedPassword = await bcrypt.hash(user.password, 12);
    user.password = hashedPassword;
    const newUser = new this.userModel(user);
    const savedUser = await newUser.save();
    const payload = {
      name: savedUser.name,
      userId: savedUser._id,
    };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }

  async login(user: User): Promise<any> {
    const foundUser = await this.userModel.findOne({ email: user.email });
    if (!foundUser) {
      throw new HttpException(
        'Email or Password is incorrect',
        HttpStatus.UNAUTHORIZED,
      );
    }
    const isMatch = await bcrypt.compare(user.password, foundUser.password);
    if (!isMatch) {
      throw new HttpException(
        'Email or Password is incorrect',
        HttpStatus.UNAUTHORIZED,
      );
    }
    const payload = {
      name: foundUser.name,
      userId: foundUser._id,
    };
    const { password, ...result } = user;
    const accessToken = this.jwtService.sign(payload);
    return {
      result,
      accessToken,
    };
  }
}
