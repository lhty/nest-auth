import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Public } from '../common/decorators/public';
import { Auth, UserLoginInput } from '../modules/auth/dto';
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
    return await this.authService.refreshToken(token);
  }
}
