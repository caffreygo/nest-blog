import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

// 该服务直接继承 PrismaClient 即可
@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      // 开发时在控制台打印对应的 sql 语句
      log: ['query'],
    })
  }
}
