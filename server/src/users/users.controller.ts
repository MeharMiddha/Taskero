import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    // POST /users
    @Post()
    async createUser(@Body() body: { email: string; password_hash: string; name?: string }) {
        return this.usersService.createUser(body);
    }

    // Get /users/:id 
    @Get(':id')
    async getUserById(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.getUserById(id);
    }
}
