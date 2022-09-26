import { PrismaService } from '@/prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService, private config: ConfigService) {}
  // create(createArticleDto: CreateArticleDto) {
  //   return 'This action adds a new article'
  // }

  async findAll(args: Record<string, any>) {
    const page = args.page ? +args.page : 1
    const row = this.config.get('ARTICLE_PAGE_ROW')
    const articles = await this.prisma.article.findMany({
      skip: (page - 1) * row,
      take: +row,
    })

    const total = await this.prisma.article.count()
    return {
      meta: {
        current_page: page,
        page_row: +row,
        total,
        total_page: Math.ceil(total / row),
      },
      data: articles,
    }
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} article`
  // }

  // update(id: number, updateArticleDto: UpdateArticleDto) {
  //   return `This action updates a #${id} article`
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} article`
  // }
}
