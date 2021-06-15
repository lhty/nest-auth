import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GqlConfigService } from './config/graphql.options';
import { UserModule } from './modules/user.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GqlConfigService,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
