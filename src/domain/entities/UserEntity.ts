import EmailValidator from '../../utilities/EmailValidator'
import { Result } from '../../utilities/Result'

export default class UserEntity {
  public id?: number
  public email: string
  public type: 'admin' | 'attendant' | 'technician' = 'admin'
  public registry: number
  public name?: string

  private constructor({
    email,
    type,
    registry,
    name,
    id,
  }: {
    email: string
    type: 'admin' | 'attendant' | 'technician'
    registry: number
    name?: string
    id?: number
  }) {
    this.id = id
    this.email = email
    this.type = type
    this.registry = registry
    this.name = name
  }

  public static create(
    email: string,
    type: number,
    registry: number,
    name?: string,
    id?: number
  ) {
    if (!EmailValidator.valid(email))
      return Result.fail<UserEntity>('Email is invalid')

    if (!type) return Result.fail<UserEntity>('Type is invalid')

    if (!registry) return Result.fail<UserEntity>('Registry is invalid')

    return new UserEntity({
      email,
      type: this.#buildRole(type),
      registry,
      name,
    })
  }

  static #buildRole(role: number): 'admin' | 'attendant' | 'technician' {
    if (role === 1) return 'admin'
    if (role === 2) return 'attendant'
    if (role === 3) return 'technician'
    return 'attendant'
  }
}
