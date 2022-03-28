export enum UserRoles {
  Admin = 'admin',
  Attendant = 'attendant',
  Technician = 'technician',
}

export abstract class IUserEntity {
  id?: number
  email: string
  type: UserRoles
  registry: number
  name: string

  constructor(
    email: string,
    name: string,
    type: UserRoles,
    registry: number,
    id?: number
  ) {
    this.id = id
    this.email = email
    this.type = type
    this.registry = registry
    this.name = name
  }
}
