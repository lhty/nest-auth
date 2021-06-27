import { Request, Response } from 'express';
import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';

@Injectable()
export class GraphQLService implements GqlOptionsFactory {
  createGqlOptions(): GqlModuleOptions {
    return {
      debug: process.env.NODE_ENV !== 'production',
      playground: process.env.NODE_ENV !== 'production',
      context: ({ req, res }: { req: Request; res: Response }) => ({
        req,
        res,
      }),
      formatError: (error) => error.extensions.exception.response,
      autoSchemaFile: './schema.gql',
    };
  }
}
