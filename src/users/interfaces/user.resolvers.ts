import { Query, Resolver } from '@nestjs/graphql';
import { UserModel } from './user.model';
import { PrismaService } from 'src/prisma.service';

@Resolver(() => UserModel)
export class UsersResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Query(() => [UserModel], { name: 'users', nullable: true })
  async getUsers() {
    return this.prismaService.user.findMany({
      where: {
        isAdmin: false,
      },
    });
  }

  @Query(() => [UserModel], { name: 'allUsers', nullable: true })
  async getAllUsers() {
    return this.prismaService.user.findMany();
  }
}
