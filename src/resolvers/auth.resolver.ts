import {
  Resolver,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { User } from '../../prisma/@generated';
import { Public } from '../common/decorators/public';
import { Auth, UserLoginInput } from '../modules/auth/entities';
import { AuthService } from '../services/auth.service';

@Public()
@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Auth, { name: 'login' })
  async LOGIN(@Args('data') { email, password }: UserLoginInput) {
    return await this.authService.login(email.toLowerCase(), password);
  }

  @Mutation(() => Auth)
  async refreshToken(@Args('token') token: string) {
    return this.authService.refreshToken(token);
  }

  @ResolveField('user', () => User)
  async user(@Parent() auth: Auth) {
    return await this.authService.getUserFromToken(auth.accessToken);
  }
}
