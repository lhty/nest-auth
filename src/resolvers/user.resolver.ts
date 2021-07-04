import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  User,
  FindUniqueUserArgs,
  FindManyUserArgs,
  UpdateOneUserArgs,
  DeleteOneUserArgs,
  UserCreateInput,
} from '../../prisma/@generated';
import { Public } from '../common/decorators/public';
import { GetUserFromReq } from '../common/decorators/user';
import { JwtUserGuard } from '../common/guards/gql-jwt.guard';
import { Auth } from '../modules/auth/entities';
import { UserService } from '../services/user.service';

@UseGuards(JwtUserGuard)
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

  @Public()
  @Mutation(() => Auth, { name: 'createUser' })
  async CREATE(@Args('user') user: UserCreateInput) {
    return this.userService.createUser(user);
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
