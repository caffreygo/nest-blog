import { Role } from '@/category/enum'
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { user as User } from '@prisma/client'
import { Observable } from 'rxjs'

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const user = context.switchToHttp().getRequest().user as User
    // metadata 存储了 roles，这边需要根据 class 和 method 信息取回来
    const requiredRoles = this.reflector.getAllAndMerge<Role[]>('roles', [context.getHandler(), context.getClass()])
    return requiredRoles.length ? requiredRoles.some((role) => role === user.role) : true
  }
}
