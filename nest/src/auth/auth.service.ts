import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { hash } from 'argon2'
import { PrismaService } from 'src/prisma/prisma.service'
import RegisterDto from './dto/register.dto'

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  async register(dto: RegisterDto) {
    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        password: await hash(dto.password),
      },
    })
    return await this.token(user)
  }

  private async token({ id, name }) {
    return {
      token: await this.jwt.signAsync({
        name,
        sub: id,
      }),
    }
  }
}
