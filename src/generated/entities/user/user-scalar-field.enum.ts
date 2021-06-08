import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    name = "name",
    pwd_hash = "pwd_hash"
}

registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum' })
