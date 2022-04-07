import { Result } from '../../utilities/Result'
import { IScheduleEntity } from '../entities/IScheduleEntity'

export default interface ISchedulesRepository {
  getAllSchedules(): Promise<Result<IScheduleEntity[] | { status: string }>>
  createSchedule(
    client: IScheduleEntity
  ): Promise<Result<IScheduleEntity | { status: string }>>
  updateSchedule(client: IScheduleEntity): Promise<Result<IScheduleEntity>>
  deleteSchedule(
    clientId: string | number
  ): Promise<Result<IScheduleEntity | { status: string }>>
}
