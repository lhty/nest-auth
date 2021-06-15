import {
  Resolver,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { User, UserCreateInput } from '../../prisma/@generated';
import { Auth, Token, UserLoginInput } from '../modules/auth/entities';
import { AuthService } from '../services/auth.service';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Auth, { name: 'signup' })
  async SIGNUP(@Args('user') user: UserCreateInput) {
    return this.authService.createUser(user);
  }

  @Mutation(() => Auth, { name: 'login' })
  async LOGIN(@Args('data') { email, password }: UserLoginInput) {
    return await this.authService.login(email.toLowerCase(), password);
  }

  @Mutation(() => Token)
  async refreshToken(@Args('token') token: string) {
    return this.authService.refreshToken(token);
  }

  @ResolveField('user', () => User)
  async user(@Parent() auth: Auth) {
    return await this.authService.getUserFromToken(auth.accessToken);
  }
}
