import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module'
import Validate from './common/validate'
import { TransformInterceptor } from './transform.inteceptor'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.useGlobalPipes(new Validate())
  app.useGlobalInterceptors(new TransformInterceptor())
  app.setGlobalPrefix('api')
  // 设置静态资源可访问路径
  app.useStaticAssets('uploads', {
    prefix: '/uploads',
  })
  await app.listen(3000)
}
bootstrap()
