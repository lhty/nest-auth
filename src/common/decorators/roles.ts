import { SetMetadata } from '@nestjs/common';

enum Roles {
  INACTIVE,
  REGULAR,
  ADVANCED,
  SU,
}

export const RolesAllowed = (...roles: Roles[]) => SetMetadata('roles', roles);
