/* eslint-disable prettier/prettier */

import { Controller, Body, HttpException, HttpStatus } from '@nestjs/common';
import { Get, Post } from '@nestjs/common/decorators';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  async createUser(@Body() user: User) {
    return this.userService.create(user);
  }

  @Post('login')
  async login(@Body() findUser: any): Promise<any> {
    try {
      const user = await this.userService.login(findUser);
      return user;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }

  // @Get('/drop')
  // drop() {
  //   this.userService.dropProjectIndexes();
  // }
}
