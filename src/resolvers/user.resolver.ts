import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from '../services/user.service';
import { User, UserCreateInput, UserWhereInput } from '../../prisma/entities';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User, { name: 'userById' })
  async USER_BY_ID(@Args('id') id: string) {
    return this.userService.userById({ id: Number(id) });
  }

  @Query(() => [User], { name: 'users' })
  async USERS(@Args('where', { nullable: true }) where: UserWhereInput) {
    return this.userService.users({ where });
  }

  @Mutation(() => User, { name: 'signup' })
  async SIGNUP(
    @Args('data')
    data: UserCreateInput,
  ) {
    return this.userService.createUser(data);
  }
}
