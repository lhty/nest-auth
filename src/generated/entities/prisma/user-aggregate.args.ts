import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserWhereInput } from '../user/user-where.input';
import { UserOrderByInput } from '../user/user-order-by.input';
import { UserWhereUniqueInput } from '../user/user-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserCountAggregateInput } from '../user/user-count-aggregate.input';
import { UserAvgAggregateInput } from '../user/user-avg-aggregate.input';
import { UserSumAggregateInput } from '../user/user-sum-aggregate.input';
import { UserMinAggregateInput } from '../user/user-min-aggregate.input';
import { UserMaxAggregateInput } from '../user/user-max-aggregate.input';

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: UserWhereInput;

    @Field(() => [UserOrderByInput], {nullable:true})
    orderBy?: Array<UserOrderByInput>;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: UserWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: UserCountAggregateInput;

    @Field(() => UserAvgAggregateInput, {nullable:true})
    _avg?: UserAvgAggregateInput;

    @Field(() => UserSumAggregateInput, {nullable:true})
    _sum?: UserSumAggregateInput;

    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: UserMinAggregateInput;

    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: UserMaxAggregateInput;
}
