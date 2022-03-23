import EmailValidator from '../../utilities/EmailValidator'
import { Result } from '../../utilities/Result'

interface AddressProps {
  street: string
  number: number
  neighborhood: string
  city: string
  uf: string
}

export default class ClientEntity {
  public id?: number
  public name: string
  public email: string
  public phone: number
  public address: AddressProps

  private constructor({
    name,
    email,
    phone,
    address,
    id,
  }: {
    name: string
    email: string
    phone: number
    address: AddressProps
    id?: number
  }) {
    this.id = id
    this.name = name
    this.email = email
    this.phone = phone
    this.address = address
  }

  public static create(
    name: string,
    email: string,
    phone: number,
    address: AddressProps,
    id?: number
  ) {
    if (!name) return Result.fail<ClientEntity>('Name is invalid')

    if (!EmailValidator.valid(email))
      return Result.fail<ClientEntity>('Email is invalid')

    if (!phone) return Result.fail<ClientEntity>('Phone is invalid')

    if (!address) return Result.fail<ClientEntity>('Address is invalid')

    return new ClientEntity({
      name,
      email,
      phone,
      address,
      id,
    })
  }
}
