import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import * as path from 'path';

@Module({
  controllers: [AppController],
  providers: [AppService, PrismaService],
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
    }),
    PostsModule,
    UsersModule,
  ],
})
export class AppModule {}
