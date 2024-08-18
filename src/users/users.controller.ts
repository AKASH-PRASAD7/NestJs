import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  //   userService = new UsersService();
  constructor(private readonly userService: UsersService) {} //same as above line

  @Get()
  findAll(@Query('role') role?: 'user' | 'moderator' | 'admin') {
    return this.userService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Post()
  createOne(
    @Body()
    userData: {
      name: string;
      email: string;
      phone: string;
      age: number;
    },
  ) {
    return this.userService.create(userData);
  }

  @Patch(':id')
  updateOne(
    @Param('id') id: string,
    @Body()
    userData: {
      name?: string;
      email?: string;
      phone?: string;
      age?: number;
      role?: string;
    },
  ) {
    return this.userService.update(id, userData);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
