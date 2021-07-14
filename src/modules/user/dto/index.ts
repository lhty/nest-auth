import { Field, InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { ProfileUncheckedCreateWithoutUserInput } from '../../../../prisma/@generated';

@InputType()
export class UserWithProfileInput extends ProfileUncheckedCreateWithoutUserInput {
  @Field(() => String, { nullable: false })
  @Validator.MinLength(5)
  @Validator.MaxLength(50)
  password!: string;
}
