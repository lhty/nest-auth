import { SetMetadata } from '@nestjs/common';
import { decorators } from '../enums/decorators_enum';

export const Public = (): ((
  target: object,
  key?: any,
  descriptor?: any,
) => any) => SetMetadata(decorators.public, true);
