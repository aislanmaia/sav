import { Result } from '../../utilities/Result'
import UserEntity from '../entities/UserEntity'

export default interface IUserRepository {
  login(
    email: string,
    password: string
  ): Promise<Result<UserEntity | { error: string } | { status: string }>>
}
