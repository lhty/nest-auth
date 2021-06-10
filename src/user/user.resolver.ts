import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from '../@generated/entities/user/user.model';
import { UserCreateInput } from '../@generated/entities/user/user-create.input';
// import { FindFirstUserArgs } from '../@generated/entities/user/find-first-user.args';
// import { AggregateUser } from '../@generated/entities/user/aggregate-user.output';
// import { FindManyUserArgs } from '../@generated/entities/user/find-many-user.args';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User, { name: 'user' })
  async USER(@Args('id') id: string) {
    return this.userService.user({ id: Number(id) });
  }

  // @Query(() => [User], { name: 'users' })
  // async USERS(
  //   @Args('params')
  //   params: FindManyUserArgs,
  // ) {
  //   return this.userService.users(params);
  // }

  @Mutation(() => User, { name: 'signup' })
  async SIGNUP(
    @Args('data')
    data: UserCreateInput,
  ) {
    return this.userService.createUser(data);
  }
}
