import { Module } from '@nestjs/common'
import { MulterModule } from '@nestjs/platform-express'
import { UploadService } from './upload.service'
import { diskStorage } from 'multer'
import { extname } from 'path'
import { UploadController } from './upload.controller'

@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory() {
        return {
          storage: diskStorage({
            // 文件存储位置
            destination: 'uploads',
            // 文件名定制
            filename: (req, file, cb) => {
              // 日期 - 随机数 - 扩展名
              const filename = Date.now() + '-' + Math.round(Math.random() + 1e10) + extname(file.originalname)
              cb(null, filename)
            },
          }),
        }
      },
    }),
  ],
  providers: [UploadService],
  controllers: [UploadController],
})
export class UploadModule {}
