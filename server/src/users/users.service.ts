import {
  Injectable,
  NotFoundException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // POST - New user create
  async createUser(data: {
    email: string;
    password_hash: string;
    name?: string;
  }) {
    try {
      return await this.prisma.user.create({
        data: {
          email: data.email,
          name: data.name,
          password_hash: data.password_hash,
        },
      });
    } catch (error) {
      // Prisma P2002 code unique constraint violation ke liye hota hai
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Users with this email already exists');
      }
      throw new InternalServerErrorException(
        'Something went wrong while creating a user',
      );
    }
  }

  // GET - fetch user on basis of id
  async getUserById(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        todos: true, // fetch todos too along with user
      },
    });
    if (!user) {
      throw new NotFoundException(`User with ID${id} not found.`); // throw an exception if user not found.
    }
    return user;
  }
}
