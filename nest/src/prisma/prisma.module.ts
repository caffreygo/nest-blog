import { Global, Module } from '@nestjs/common'
import { PrismaService } from './prisma.service'

// Global 将 prisma 声明为全局模块，依然需要 exports
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
