import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from '../services/user.service';
import {
  User,
  UserCreateInput,
  UserOrderByInput,
  UserWhereInput,
  FindManyUserArgs,
} from '../../prisma/entities';
@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User, { name: 'userById' })
  async USER_BY_ID(@Args('id') id: string) {
    return this.userService.userById({ id: Number(id) });
  }

  @Query(() => [User], { name: 'users' })
  async USERS(
    // @Args({ name: 'where', nullable: true }) where: UserWhereInput,
    // @Args({ name: 'take', nullable: true }) take: number,
    // @Args({ name: 'skip', nullable: true }) skip: number,
    // @Args({ name: 'orderBy', nullable: true, type: () => [UserOrderByInput] })
    // orderBy: UserOrderByInput[],
    @Args({ name: 'params', nullable: true }) params: FindManyUserArgs,
  ) {
    // return this.userService.users({ where, take, skip, orderBy });
    return this.userService.users(params);
  }

  @Mutation(() => User, { name: 'signup' })
  async SIGNUP(
    @Args('data')
    data: UserCreateInput,
  ) {
    return this.userService.createUser(data);
  }
}
