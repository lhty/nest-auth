import { Module, ValidationPipe } from '@nestjs/common';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtTokenGuard } from './common/guards/gql-jwt.guard';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user.module';
import { GraphQLService } from './services/graphql.service';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GraphQLService,
    }),
    AuthModule,
    UserModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtTokenGuard,
    },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
