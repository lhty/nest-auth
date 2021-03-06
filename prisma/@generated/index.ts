import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import * as Validator from 'class-validator';
import { ID } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    password = "password",
    email = "email",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

export enum ProfileScalarFieldEnum {
    email = "email",
    role = "role",
    phone = "phone",
    firstName = "firstName",
    lastName = "lastName"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum Roles {
    PASSWORD_REQUIRED = "PASSWORD_REQUIRED",
    INACTIVE = "INACTIVE",
    REGULAR = "REGULAR",
    ADVANCED = "ADVANCED",
    SU = "SU"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

registerEnumType(QueryMode, { name: 'QueryMode' })
registerEnumType(Roles, { name: 'Roles' })
registerEnumType(SortOrder, { name: 'SortOrder' })
registerEnumType(ProfileScalarFieldEnum, { name: 'ProfileScalarFieldEnum' })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum' })

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class DateTimeFieldUpdateOperationsInput {
    @Field(() => Date, {nullable:true})
    set?: Date | string;
}

@InputType()
export class DateTimeFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => DateTimeFilter, {nullable:true})
    not?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
    @Field(() => Date, {nullable:true})
    equals?: Date | string;
    @Field(() => [Date], {nullable:true})
    in?: Array<Date> | Array<string>;
    @Field(() => [Date], {nullable:true})
    notIn?: Array<Date> | Array<string>;
    @Field(() => Date, {nullable:true})
    lt?: Date | string;
    @Field(() => Date, {nullable:true})
    lte?: Date | string;
    @Field(() => Date, {nullable:true})
    gt?: Date | string;
    @Field(() => Date, {nullable:true})
    gte?: Date | string;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    count?: InstanceType<typeof IntFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    _min?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    min?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    _max?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    max?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class EnumRolesFieldUpdateOperationsInput {
    @Field(() => Roles, {nullable:true})
    set?: Roles;
}

@InputType()
export class EnumRolesFilter {
    @Field(() => Roles, {nullable:true})
    equals?: Roles;
    @Field(() => [Roles], {nullable:true})
    in?: Array<Roles>;
    @Field(() => [Roles], {nullable:true})
    notIn?: Array<Roles>;
    @Field(() => EnumRolesFilter, {nullable:true})
    not?: InstanceType<typeof EnumRolesFilter>;
}

@InputType()
export class EnumRolesWithAggregatesFilter {
    @Field(() => Roles, {nullable:true})
    equals?: Roles;
    @Field(() => [Roles], {nullable:true})
    in?: Array<Roles>;
    @Field(() => [Roles], {nullable:true})
    notIn?: Array<Roles>;
    @Field(() => EnumRolesWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof EnumRolesWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    count?: InstanceType<typeof IntFilter>;
    @Field(() => EnumRolesFilter, {nullable:true})
    _min?: InstanceType<typeof EnumRolesFilter>;
    @Field(() => EnumRolesFilter, {nullable:true})
    min?: InstanceType<typeof EnumRolesFilter>;
    @Field(() => EnumRolesFilter, {nullable:true})
    _max?: InstanceType<typeof EnumRolesFilter>;
    @Field(() => EnumRolesFilter, {nullable:true})
    max?: InstanceType<typeof EnumRolesFilter>;
}

@InputType()
export class FloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => FloatFilter, {nullable:true})
    not?: InstanceType<typeof FloatFilter>;
}

@InputType()
export class IntFieldUpdateOperationsInput {
    @Field(() => Int, {nullable:true})
    set?: number;
    @Field(() => Int, {nullable:true})
    increment?: number;
    @Field(() => Int, {nullable:true})
    decrement?: number;
    @Field(() => Int, {nullable:true})
    multiply?: number;
    @Field(() => Int, {nullable:true})
    divide?: number;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => IntFilter, {nullable:true})
    not?: InstanceType<typeof IntFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    count?: InstanceType<typeof IntFilter>;
    @Field(() => FloatFilter, {nullable:true})
    _avg?: InstanceType<typeof FloatFilter>;
    @Field(() => FloatFilter, {nullable:true})
    avg?: InstanceType<typeof FloatFilter>;
    @Field(() => IntFilter, {nullable:true})
    _sum?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    sum?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    _min?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    min?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    _max?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    max?: InstanceType<typeof IntFilter>;
}

@ArgsType()
export class ProfileAggregateArgs {
    @Field(() => ProfileWhereInput, {nullable:true})
    where?: InstanceType<typeof ProfileWhereInput>;
    @Field(() => [ProfileOrderByInput], {nullable:true})
    orderBy?: Array<ProfileOrderByInput>;
    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProfileWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProfileCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProfileCountAggregateInput>;
    @Field(() => ProfileMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProfileMinAggregateInput>;
    @Field(() => ProfileMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProfileMaxAggregateInput>;
}

@InputType()
export class StringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => StringFilter, {nullable:true})
    not?: InstanceType<typeof StringFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => IntFilter, {nullable:true})
    count?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    _min?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    min?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    _max?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    max?: InstanceType<typeof StringFilter>;
}

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByInput], {nullable:true})
    orderBy?: Array<UserOrderByInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregateInput>;
    @Field(() => UserSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class AggregateProfile {
    @Field(() => ProfileCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProfileCountAggregate>;
    @Field(() => ProfileCountAggregate, {nullable:true})
    count?: InstanceType<typeof ProfileCountAggregate>;
    @Field(() => ProfileMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProfileMinAggregate>;
    @Field(() => ProfileMinAggregate, {nullable:true})
    min?: InstanceType<typeof ProfileMinAggregate>;
    @Field(() => ProfileMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProfileMaxAggregate>;
    @Field(() => ProfileMaxAggregate, {nullable:true})
    max?: InstanceType<typeof ProfileMaxAggregate>;
}

@ArgsType()
export class CreateManyProfileArgs {
    @Field(() => [ProfileCreateManyInput], {nullable:false})
    data!: Array<ProfileCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneProfileArgs {
    @Field(() => ProfileCreateInput, {nullable:false})
    data!: InstanceType<typeof ProfileCreateInput>;
}

@ArgsType()
export class DeleteManyProfileArgs {
    @Field(() => ProfileWhereInput, {nullable:true})
    where?: InstanceType<typeof ProfileWhereInput>;
}

@ArgsType()
export class DeleteOneProfileArgs {
    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProfileWhereUniqueInput>;
}

@ArgsType()
export class FindFirstProfileArgs {
    @Field(() => ProfileWhereInput, {nullable:true})
    where?: InstanceType<typeof ProfileWhereInput>;
    @Field(() => [ProfileOrderByInput], {nullable:true})
    orderBy?: Array<ProfileOrderByInput>;
    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProfileWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProfileScalarFieldEnum], {nullable:true})
    distinct?: Array<ProfileScalarFieldEnum>;
}

@ArgsType()
export class FindManyProfileArgs {
    @Field(() => ProfileWhereInput, {nullable:true})
    where?: InstanceType<typeof ProfileWhereInput>;
    @Field(() => [ProfileOrderByInput], {nullable:true})
    orderBy?: Array<ProfileOrderByInput>;
    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof ProfileWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ProfileScalarFieldEnum], {nullable:true})
    distinct?: Array<ProfileScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueProfileArgs {
    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProfileWhereUniqueInput>;
}

@InputType()
export class ProfileCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @HideField()
    role?: true;
    @Field(() => Boolean, {nullable:true})
    phone?: true;
    @Field(() => Boolean, {nullable:true})
    firstName?: true;
    @Field(() => Boolean, {nullable:true})
    lastName?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ProfileCountAggregate {
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    role!: number;
    @Field(() => Int, {nullable:false})
    phone!: number;
    @Field(() => Int, {nullable:false})
    firstName!: number;
    @Field(() => Int, {nullable:false})
    lastName!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ProfileCreateManyInput {
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    @Validator.IsEmail()
    @Validator.IsNotEmpty()
    email!: string;
    @HideField()
    role?: Roles;
    @Field(() => Scalars.GraphQLPhoneNumber, {nullable:false})
    @Validator.IsPhoneNumber()
    @Validator.IsNotEmpty()
    phone!: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    @Validator.MaxLength(50)
    @Validator.IsNotEmpty()
    firstName!: string;
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(50)
    @Validator.IsNotEmpty()
    lastName!: string;
}

@InputType()
export class ProfileCreateNestedOneWithoutUserInput {
    @Field(() => ProfileCreateWithoutUserInput, {nullable:true})
    create?: InstanceType<typeof ProfileCreateWithoutUserInput>;
    @Field(() => ProfileCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof ProfileCreateOrConnectWithoutUserInput>;
    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof ProfileWhereUniqueInput>;
}

@InputType()
export class ProfileCreateOrConnectWithoutUserInput {
    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProfileWhereUniqueInput>;
    @Field(() => ProfileCreateWithoutUserInput, {nullable:false})
    create!: InstanceType<typeof ProfileCreateWithoutUserInput>;
}

@InputType()
export class ProfileCreateWithoutUserInput {
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    @Validator.IsEmail()
    @Validator.IsNotEmpty()
    email!: string;
    @HideField()
    role?: Roles;
    @Field(() => Scalars.GraphQLPhoneNumber, {nullable:false})
    @Validator.IsPhoneNumber()
    @Validator.IsNotEmpty()
    phone!: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    @Validator.MaxLength(50)
    @Validator.IsNotEmpty()
    firstName!: string;
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(50)
    @Validator.IsNotEmpty()
    lastName!: string;
}

@InputType()
export class ProfileCreateInput {
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    @Validator.IsEmail()
    @Validator.IsNotEmpty()
    email!: string;
    @HideField()
    role?: Roles;
    @Field(() => Scalars.GraphQLPhoneNumber, {nullable:false})
    @Validator.IsPhoneNumber()
    @Validator.IsNotEmpty()
    phone!: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    @Validator.MaxLength(50)
    @Validator.IsNotEmpty()
    firstName!: string;
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(50)
    @Validator.IsNotEmpty()
    lastName!: string;
    @Field(() => UserCreateNestedOneWithoutProfileInput, {nullable:true})
    User?: InstanceType<typeof UserCreateNestedOneWithoutProfileInput>;
}

@ArgsType()
export class ProfileGroupByArgs {
    @Field(() => ProfileWhereInput, {nullable:true})
    where?: InstanceType<typeof ProfileWhereInput>;
    @Field(() => [ProfileOrderByInput], {nullable:true})
    orderBy?: Array<ProfileOrderByInput>;
    @Field(() => [ProfileScalarFieldEnum], {nullable:false})
    by!: Array<ProfileScalarFieldEnum>;
    @Field(() => ProfileScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ProfileScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ProfileCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ProfileCountAggregateInput>;
    @Field(() => ProfileMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ProfileMinAggregateInput>;
    @Field(() => ProfileMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ProfileMaxAggregateInput>;
}

@ObjectType()
export class ProfileGroupBy {
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => Roles, {nullable:false})
    role!: Roles;
    @Field(() => String, {nullable:false})
    phone!: string;
    @Field(() => String, {nullable:false})
    firstName!: string;
    @Field(() => String, {nullable:false})
    lastName!: string;
    @Field(() => ProfileCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ProfileCountAggregate>;
    @Field(() => ProfileMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ProfileMinAggregate>;
    @Field(() => ProfileMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ProfileMaxAggregate>;
}

@InputType()
export class ProfileMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @HideField()
    role?: true;
    @Field(() => Boolean, {nullable:true})
    phone?: true;
    @Field(() => Boolean, {nullable:true})
    firstName?: true;
    @Field(() => Boolean, {nullable:true})
    lastName?: true;
}

@ObjectType()
export class ProfileMaxAggregate {
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Roles, {nullable:true})
    role?: Roles;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
}

@InputType()
export class ProfileMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @HideField()
    role?: true;
    @Field(() => Boolean, {nullable:true})
    phone?: true;
    @Field(() => Boolean, {nullable:true})
    firstName?: true;
    @Field(() => Boolean, {nullable:true})
    lastName?: true;
}

@ObjectType()
export class ProfileMinAggregate {
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Roles, {nullable:true})
    role?: Roles;
    @Field(() => String, {nullable:true})
    phone?: string;
    @Field(() => String, {nullable:true})
    firstName?: string;
    @Field(() => String, {nullable:true})
    lastName?: string;
}

@InputType()
export class ProfileOrderByInput {
    @Field(() => SortOrder, {nullable:true})
    email?: SortOrder;
    @HideField()
    role?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    phone?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    firstName?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    lastName?: SortOrder;
}

@InputType()
export class ProfileRelationFilter {
    @Field(() => ProfileWhereInput, {nullable:true})
    is?: InstanceType<typeof ProfileWhereInput>;
    @Field(() => ProfileWhereInput, {nullable:true})
    isNot?: InstanceType<typeof ProfileWhereInput>;
}

@InputType()
export class ProfileScalarWhereWithAggregatesInput {
    @Field(() => [ProfileScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ProfileScalarWhereWithAggregatesInput>;
    @Field(() => [ProfileScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ProfileScalarWhereWithAggregatesInput>;
    @Field(() => [ProfileScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ProfileScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @HideField()
    role?: InstanceType<typeof EnumRolesWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    phone?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    firstName?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    lastName?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class ProfileUncheckedCreateWithoutUserInput {
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    @Validator.IsEmail()
    @Validator.IsNotEmpty()
    email!: string;
    @HideField()
    role?: Roles;
    @Field(() => Scalars.GraphQLPhoneNumber, {nullable:false})
    @Validator.IsPhoneNumber()
    @Validator.IsNotEmpty()
    phone!: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    @Validator.MaxLength(50)
    @Validator.IsNotEmpty()
    firstName!: string;
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(50)
    @Validator.IsNotEmpty()
    lastName!: string;
}

@InputType()
export class ProfileUncheckedCreateInput {
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:false})
    @Validator.IsEmail()
    @Validator.IsNotEmpty()
    email!: string;
    @HideField()
    role?: Roles;
    @Field(() => Scalars.GraphQLPhoneNumber, {nullable:false})
    @Validator.IsPhoneNumber()
    @Validator.IsNotEmpty()
    phone!: string;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    @Validator.MaxLength(50)
    @Validator.IsNotEmpty()
    firstName!: string;
    @Field(() => String, {nullable:false})
    @Validator.MaxLength(50)
    @Validator.IsNotEmpty()
    lastName!: string;
    @Field(() => UserUncheckedCreateNestedOneWithoutProfileInput, {nullable:true})
    User?: InstanceType<typeof UserUncheckedCreateNestedOneWithoutProfileInput>;
}

@InputType()
export class ProfileUncheckedUpdateManyInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @HideField()
    role?: InstanceType<typeof EnumRolesFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class ProfileUncheckedUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @HideField()
    role?: InstanceType<typeof EnumRolesFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class ProfileUncheckedUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @HideField()
    role?: InstanceType<typeof EnumRolesFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => UserUncheckedUpdateOneWithoutProfileInput, {nullable:true})
    User?: InstanceType<typeof UserUncheckedUpdateOneWithoutProfileInput>;
}

@InputType()
export class ProfileUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @HideField()
    role?: InstanceType<typeof EnumRolesFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class ProfileUpdateOneRequiredWithoutUserInput {
    @Field(() => ProfileCreateWithoutUserInput, {nullable:true})
    create?: InstanceType<typeof ProfileCreateWithoutUserInput>;
    @Field(() => ProfileCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof ProfileCreateOrConnectWithoutUserInput>;
    @Field(() => ProfileUpsertWithoutUserInput, {nullable:true})
    upsert?: InstanceType<typeof ProfileUpsertWithoutUserInput>;
    @Field(() => ProfileWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof ProfileWhereUniqueInput>;
    @Field(() => ProfileUpdateWithoutUserInput, {nullable:true})
    update?: InstanceType<typeof ProfileUpdateWithoutUserInput>;
}

@InputType()
export class ProfileUpdateWithoutUserInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @HideField()
    role?: InstanceType<typeof EnumRolesFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class ProfileUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @HideField()
    role?: InstanceType<typeof EnumRolesFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => UserUpdateOneWithoutProfileInput, {nullable:true})
    User?: InstanceType<typeof UserUpdateOneWithoutProfileInput>;
}

@InputType()
export class ProfileUpsertWithoutUserInput {
    @Field(() => ProfileUpdateWithoutUserInput, {nullable:false})
    update!: InstanceType<typeof ProfileUpdateWithoutUserInput>;
    @Field(() => ProfileCreateWithoutUserInput, {nullable:false})
    create!: InstanceType<typeof ProfileCreateWithoutUserInput>;
}

@InputType()
export class ProfileWhereUniqueInput {
    @Field(() => Scalars.GraphQLEmailAddress, {nullable:true})
    @Validator.IsEmail()
    @Validator.IsNotEmpty()
    email?: string;
    @Field(() => Scalars.GraphQLPhoneNumber, {nullable:true})
    @Validator.IsPhoneNumber()
    @Validator.IsNotEmpty()
    phone?: string;
}

@InputType()
export class ProfileWhereInput {
    @Field(() => [ProfileWhereInput], {nullable:true})
    AND?: Array<ProfileWhereInput>;
    @Field(() => [ProfileWhereInput], {nullable:true})
    OR?: Array<ProfileWhereInput>;
    @Field(() => [ProfileWhereInput], {nullable:true})
    NOT?: Array<ProfileWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    User?: InstanceType<typeof UserRelationFilter>;
    @HideField()
    role?: InstanceType<typeof EnumRolesFilter>;
    @Field(() => StringFilter, {nullable:true})
    phone?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    firstName?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    lastName?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class Profile {
    @Field(() => String, {nullable:false})
    email!: string;
    @HideField()
    User!: InstanceType<typeof User>;
    @Field(() => Roles, {nullable:false,defaultValue:'INACTIVE'})
    role!: Roles;
    @Field(() => String, {nullable:false})
    phone!: string;
    /** @Validator .@IsAlpha() */
    @Field(() => String, {nullable:false,description:'@Validator.@IsAlpha()'})
    firstName!: string;
    /** @Validator .@IsAlpha() */
    @Field(() => String, {nullable:false,description:'@Validator.@IsAlpha()'})
    lastName!: string;
}

@ArgsType()
export class UpdateManyProfileArgs {
    @Field(() => ProfileUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof ProfileUpdateManyMutationInput>;
    @Field(() => ProfileWhereInput, {nullable:true})
    where?: InstanceType<typeof ProfileWhereInput>;
}

@ArgsType()
export class UpdateOneProfileArgs {
    @Field(() => ProfileUpdateInput, {nullable:false})
    data!: InstanceType<typeof ProfileUpdateInput>;
    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProfileWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneProfileArgs {
    @Field(() => ProfileWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof ProfileWhereUniqueInput>;
    @Field(() => ProfileCreateInput, {nullable:false})
    create!: InstanceType<typeof ProfileCreateInput>;
    @Field(() => ProfileUpdateInput, {nullable:false})
    update!: InstanceType<typeof ProfileUpdateInput>;
}

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserCountAggregate, {nullable:true})
    count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregate>;
    @Field(() => UserAvgAggregate, {nullable:true})
    avg?: InstanceType<typeof UserAvgAggregate>;
    @Field(() => UserSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregate>;
    @Field(() => UserSumAggregate, {nullable:true})
    sum?: InstanceType<typeof UserSumAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], {nullable:false})
    data!: Array<UserCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, {nullable:false})
    data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class DeleteOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindFirstUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByInput], {nullable:true})
    orderBy?: Array<UserOrderByInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<UserScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByInput], {nullable:true})
    orderBy?: Array<UserOrderByInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<UserScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyUserArgs {
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class UpdateOneUserArgs {
    @Field(() => UserUpdateInput, {nullable:false})
    data!: InstanceType<typeof UserUpdateInput>;
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateInput, {nullable:false})
    create!: InstanceType<typeof UserCreateInput>;
    @Field(() => UserUpdateInput, {nullable:false})
    update!: InstanceType<typeof UserUpdateInput>;
}

@InputType()
export class UserAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class UserAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @HideField()
    password!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    createdAt!: number;
    @Field(() => Int, {nullable:false})
    updatedAt!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(5)
    @Validator.MaxLength(50)
    password!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserCreateNestedOneWithoutProfileInput {
    @Field(() => UserCreateWithoutProfileInput, {nullable:true})
    create?: InstanceType<typeof UserCreateWithoutProfileInput>;
    @Field(() => UserCreateOrConnectWithoutProfileInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutProfileInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateOrConnectWithoutProfileInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutProfileInput, {nullable:false})
    create!: InstanceType<typeof UserCreateWithoutProfileInput>;
}

@InputType()
export class UserCreateWithoutProfileInput {
    @Field(() => String, {nullable:false})
    @Validator.MinLength(5)
    @Validator.MaxLength(50)
    password!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:false})
    @Validator.MinLength(5)
    @Validator.MaxLength(50)
    password!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
    @Field(() => ProfileCreateNestedOneWithoutUserInput, {nullable:false})
    profile!: InstanceType<typeof ProfileCreateNestedOneWithoutUserInput>;
}

@ArgsType()
export class UserGroupByArgs {
    @Field(() => UserWhereInput, {nullable:true})
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByInput], {nullable:true})
    orderBy?: Array<UserOrderByInput>;
    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<UserScalarFieldEnum>;
    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregateInput>;
    @Field(() => UserSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @HideField()
    password!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof UserAvgAggregate>;
    @Field(() => UserSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof UserSumAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class UserMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @HideField()
    password?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}

@ObjectType()
export class UserMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @HideField()
    password?: string;
    @Field(() => String, {nullable:true})
    email?: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserOrderByInput {
    @Field(() => SortOrder, {nullable:true})
    id?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    createdAt?: SortOrder;
    @Field(() => SortOrder, {nullable:true})
    updatedAt?: SortOrder;
}

@InputType()
export class UserRelationFilter {
    @Field(() => UserWhereInput, {nullable:true})
    is?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    isNot?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class UserSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class UserSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class UserUncheckedCreateNestedOneWithoutProfileInput {
    @Field(() => UserCreateWithoutProfileInput, {nullable:true})
    create?: InstanceType<typeof UserCreateWithoutProfileInput>;
    @Field(() => UserCreateOrConnectWithoutProfileInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutProfileInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserUncheckedCreateWithoutProfileInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(5)
    @Validator.MaxLength(50)
    password!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    @Validator.MinLength(5)
    @Validator.MaxLength(50)
    password!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

@InputType()
export class UserUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateOneWithoutProfileInput {
    @Field(() => UserCreateWithoutProfileInput, {nullable:true})
    create?: InstanceType<typeof UserCreateWithoutProfileInput>;
    @Field(() => UserCreateOrConnectWithoutProfileInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutProfileInput>;
    @Field(() => UserUpsertWithoutProfileInput, {nullable:true})
    upsert?: InstanceType<typeof UserUpsertWithoutProfileInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => UserUpdateWithoutProfileInput, {nullable:true})
    update?: InstanceType<typeof UserUpdateWithoutProfileInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutProfileInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUpdateOneWithoutProfileInput {
    @Field(() => UserCreateWithoutProfileInput, {nullable:true})
    create?: InstanceType<typeof UserCreateWithoutProfileInput>;
    @Field(() => UserCreateOrConnectWithoutProfileInput, {nullable:true})
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutProfileInput>;
    @Field(() => UserUpsertWithoutProfileInput, {nullable:true})
    upsert?: InstanceType<typeof UserUpsertWithoutProfileInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;
    @Field(() => Boolean, {nullable:true})
    delete?: boolean;
    @Field(() => UserUpdateWithoutProfileInput, {nullable:true})
    update?: InstanceType<typeof UserUpdateWithoutProfileInput>;
}

@InputType()
export class UserUpdateWithoutProfileInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    @Field(() => ProfileUpdateOneRequiredWithoutUserInput, {nullable:true})
    profile?: InstanceType<typeof ProfileUpdateOneRequiredWithoutUserInput>;
}

@InputType()
export class UserUpsertWithoutProfileInput {
    @Field(() => UserUpdateWithoutProfileInput, {nullable:false})
    update!: InstanceType<typeof UserUpdateWithoutProfileInput>;
    @Field(() => UserCreateWithoutProfileInput, {nullable:false})
    create!: InstanceType<typeof UserCreateWithoutProfileInput>;
}

@InputType()
export class UserWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    email?: string;
}

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => ProfileRelationFilter, {nullable:true})
    profile?: InstanceType<typeof ProfileRelationFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: InstanceType<typeof DateTimeFilter>;
    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class User {
    @Field(() => ID, {nullable:false})
    id!: number;
    @HideField()
    password!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => Profile, {nullable:false})
    profile!: InstanceType<typeof Profile>;
    @Field(() => Date, {nullable:false})
    createdAt!: Date;
    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
