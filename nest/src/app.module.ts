import { ConfigModule } from '@nestjs/config'
import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { PrismaService } from './prisma/prisma.service'
import { PrismaModule } from './prisma/prisma.module'
import { ArticleModule } from './article/article.module'
import { CategoryModule } from './category/category.module'

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    ArticleModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CategoryModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
