import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { User } from '@prisma/client';

@ObjectType()
export class Token {
  @Field({ description: 'JWT access token' })
  accessToken: string;

  @Field({ description: 'JWT refresh token' })
  refreshToken: string;
}

@ObjectType()
export class Auth extends Token {
  user: User;
}

@InputType()
export class UserLoginInput {
  @Field(() => String)
  email: string;
  @Field(() => String)
  password: string;
}
