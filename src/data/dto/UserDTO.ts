import { UserRoles } from '../../domain/entities/IUserEntity'
import UserEntity from '../../domain/entities/UserEntity'

export default class UserDTO extends UserEntity {
  public id?: number
  public firstname: string
  public lastname: string
  public email: string
  public registry: number
  public role: UserRoles
  public password?: string
  public passwordConfirmation?: string
  public token?: string

  constructor({
    email,
    role,
    registry,
    firstname,
    lastname,
    password,
    passwordConfirmation,
    id,
    token,
  }: {
    email: string
    role: UserRoles
    registry: number
    firstname: string
    lastname: string
    password?: string
    passwordConfirmation?: string
    id?: number
    token?: string
  }) {
    super({ email, type: role, registry, id, name: '' })
    this.id = id
    this.email = email
    this.role = role
    this.type = role
    this.registry = registry
    this.firstname = firstname
    this.lastname = lastname
    this.name = `${this.firstname} ${this.lastname}`
    this.password = password
    this.passwordConfirmation = passwordConfirmation
    this.token = token
  }

  static parseToUserRole(role: string) {
    if (role === 'Atendente') return UserRoles.Attendant
    if (role === 'Técnico') return UserRoles.Technician
    return UserRoles.Attendant
  }
}
