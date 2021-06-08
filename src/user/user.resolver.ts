import { Args, Query, Resolver } from '@nestjs/graphql';
import { User as UserModel } from '@prisma/client';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserModel, { name: 'user', nullable: true })
  async USER(@Args('id') id: string): Promise<UserModel> {
    return this.userService.user({ where: { id: Number(id) } });
  }
}
