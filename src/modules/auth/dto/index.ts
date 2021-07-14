import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Profile, User } from '../../../../prisma/@generated';

@ObjectType()
export class Token {
  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;
}

@ObjectType()
export class Auth extends Token {
  @Field(() => User, { nullable: true })
  user: any;
}

@InputType()
export class UserLoginInput {
  @Field()
  email: string;
  @Field()
  password: string;
}
