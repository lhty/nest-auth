import { SetMetadata } from '@nestjs/common';
import { Roles } from '../../../prisma/@generated';

export const RolesAllowed = (...roles: Roles[]) => SetMetadata('roles', roles);
