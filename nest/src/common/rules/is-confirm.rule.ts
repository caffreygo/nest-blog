import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator'

//判断 key_confirm 和 key 字段的值是否相等 （两次密码是否一致）
export function IsConfirm(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'IsConfirm',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        async validate(value: string, args: ValidationArguments) {
          return Boolean(value == args.object[`${args.property}_confirm`])
        },
      },
    })
  }
}
