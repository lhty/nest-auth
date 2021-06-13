import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from '../services/user.service';
import {
  User,
  FindManyUserArgs,
  FindUniqueUserArgs,
  CreateOneUserArgs,
  UpdateOneUserArgs,
  DeleteOneUserArgs,
} from '../../prisma/@generated';
@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User, { name: 'user' })
  async USER(@Args() credentials: FindUniqueUserArgs) {
    return this.userService.user(credentials);
  }

  @Query(() => [User], { name: 'users' })
  async USERS(@Args({ nullable: true }) params: FindManyUserArgs) {
    return this.userService.users(params);
  }

  @Mutation(() => User, { name: 'signup' })
  async SIGNUP(@Args() data: CreateOneUserArgs) {
    return this.userService.createUser(data);
  }

  @Mutation(() => User, { name: 'updateUser' })
  async UPDATE(@Args() data: UpdateOneUserArgs) {
    return this.userService.updateUser(data);
  }

  @Mutation(() => User, { name: 'deleteUser' })
  async DELETE(@Args() data: DeleteOneUserArgs) {
    return this.userService.deleteUser(data);
  }
}
