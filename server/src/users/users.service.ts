import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    // POST - New user create
    async createUser(data: { email: string; password_hash: string, name?: string }) {
        return this.prisma.user.create({
            data: {
                email: data.email,
                name: data.name,
                password_hash: data.password_hash
            },
        });
    }

    // GET - fetch user on basis of id
    async getUserById(id: number){
        const user = await this.prisma.user.findUnique({
            where: {id},
            include: {
                todos: true, // fetch todos too along with user
            },
        });
        if(!user) {
            throw new NotFoundException(`User with ID${id} not found.`) // throw an exception if user not found.
        }
        return user;
    }
}
