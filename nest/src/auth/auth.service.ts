import { Injectable } from '@nestjs/common'

@Injectable()
export class AuthService {
  register(dto) {
    console.log(dto)
    return 123
  }
}
