/* eslint-disable prettier/prettier */

import { Controller, Body } from '@nestjs/common';
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

  // @Get('/drop')
  // drop() {
  //   this.userService.dropProjectIndexes();
  // }
}
