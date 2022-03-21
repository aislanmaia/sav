import { Result } from '../../utilities/Result'

export default interface UseCase<I = void, O = void> {
  execute(input: I): O | Promise<Result<O>>
}
