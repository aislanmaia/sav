import { Result } from '../../utilities/Result'
import ClientEntity from './ClientEntity'
import { IScheduleEntity, ScheduleStatus } from './IScheduleEntity'
import { IUserEntity } from './IUserEntity'

export interface IScheduler {
  schedules: IScheduleEntity[]

  schedule(
    client: ClientEntity,
    employee: IUserEntity,
    datetime: Date,
    status: ScheduleStatus
  ): Result<IScheduleEntity | { error: string }>

  addSchedule(schedule: IScheduleEntity): void
  removeSchedule(schedule: IScheduleEntity): void
  findScheduleByClient(client: ClientEntity): boolean
  clientHasOpenSchedule(client: ClientEntity): boolean
  scheduleIsFinished(schedule: IScheduleEntity): boolean
  scheduleIsCancelled(schedule: IScheduleEntity): boolean
}
