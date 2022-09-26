import { Controller, Get, Query } from '@nestjs/common'
import { ArticleService } from './article.service'

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  // @Post()
  // create(@Body() createArticleDto: CreateArticleDto) {
  //   return this.articleService.create(createArticleDto)
  // }

  @Get()
  findAll(@Query() args = {}) {
    return this.articleService.findAll(args)
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.articleService.findOne(+id)
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
  //   return this.articleService.update(+id, updateArticleDto)
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.articleService.remove(+id)
  // }
}
