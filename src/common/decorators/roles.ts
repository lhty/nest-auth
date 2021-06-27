import { SetMetadata } from '@nestjs/common';
import { Roles } from '../../modules/auth/constants';

export const RolesAllowed = (...roles: Roles[]) => SetMetadata('roles', roles);
