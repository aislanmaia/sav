import EmailValidator from '../../utilities/EmailValidator'
import { Result } from '../../utilities/Result'
import { IUserEntity, UserRoles } from './IUserEntity'

export default class UserEntity extends IUserEntity {
  public id?: number
  public email: string
  public type: UserRoles
  public registry: number
  public name: string
  public password?: string
  public passwordConfirmation?: string

  public constructor({
    email,
    type,
    registry,
    name,
    password,
    passwordConfirmation,
    id,
  }: {
    email: string
    type: UserRoles
    registry: number
    name: string
    password?: string
    passwordConfirmation?: string
    id?: number
  }) {
    super(email, name, type, registry, id)
    this.id = id
    this.email = email
    this.type = type
    this.registry = registry
    this.name = name
    this.password = password
    this.passwordConfirmation = passwordConfirmation
  }

  public static create(
    email: string,
    type: UserRoles,
    registry: number,
    name: string,
    password?: string,
    passwordConfirmation?: string,
    id?: number
  ): Result<UserEntity> | Result<string> {
    if (!EmailValidator.valid(email))
      return Result.fail<string>('Email is invalid')

    if (!type) return Result.fail<string>('Type is invalid')

    if (!registry) return Result.fail<string>('Registry is invalid')

    if (password !== passwordConfirmation)
      return Result.fail<string>('Password not match password confirmation')

    return Result.ok<UserEntity>(
      new UserEntity({
        email,
        type,
        registry,
        name,
        password,
        passwordConfirmation,
        id,
      })
    )
  }

  // static #buildRole(role: number): 'admin' | 'attendant' | 'technician' {
  //   if (role === 1) return 'admin'
  //   if (role === 2) return 'attendant'
  //   if (role === 3) return 'technician'
  //   return 'attendant'
  // }
}
