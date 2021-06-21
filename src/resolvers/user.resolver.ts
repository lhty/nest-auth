import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  User,
  FindUniqueUserArgs,
  FindManyUserArgs,
  UpdateOneUserArgs,
  DeleteOneUserArgs,
} from '../../prisma/@generated';
import { GetUserFromReq } from '../common/decorators/user';
import { UserService } from '../services/user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User, { name: 'user' })
  async USER(@Args() credentials: FindUniqueUserArgs) {
    return this.userService.user(credentials);
  }

  @Query(() => User, { name: 'me' })
  async ME(@GetUserFromReq() user: User) {
    return user;
  }

  @Query(() => [User], { name: 'users' })
  async USERS(@Args({ nullable: true }) params: FindManyUserArgs) {
    return this.userService.users(params);
  }

  @Mutation(() => User, { name: 'updateUser' })
  async UPDATE(@Args() user: UpdateOneUserArgs) {
    return this.userService.updateUser(user);
  }

  @Mutation(() => User, { name: 'deleteUser' })
  async DELETE(@Args() user: DeleteOneUserArgs) {
    return this.userService.deleteUser(user);
  }
}
