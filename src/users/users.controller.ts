import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService ){}
    @Get()
    getUsers(@Query('name') name:string):User[]{
        return this.userService.findAll(name);
    }

    @Get(':id')
    getUserById(@Param('id',ParseIntPipe) id:number):User{
        return this.userService.findById(id)
    }

    @Post()
    createUser(@Body() body:createUserDto):User{
        return this.userService.createUser(body)
    }

}
