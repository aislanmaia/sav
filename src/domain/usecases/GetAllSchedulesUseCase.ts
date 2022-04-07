import IUseCase from '../../core/usecases/IUseCase'
import { Result } from '../../utilities/Result'
import { IScheduleEntity } from '../entities/IScheduleEntity'
import ISchedulesRepository from '../repositories/ISchedulesRepository'

export default class GetAllSchedulesUseCase
  implements IUseCase<void, IScheduleEntity[] | { status: string }>
{
  constructor(private repository: ISchedulesRepository) {}

  async execute(
    input: void
  ): Promise<Result<IScheduleEntity[] | { status: string }>> {
    // call repository
    const result = await this.repository.getAllSchedules()

    // if (result.isFailure) {
    //   return result as Result<{status: string}>
    // }
    // handle result

    return result
  }
}
