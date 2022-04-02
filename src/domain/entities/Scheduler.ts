import { Result } from '../../utilities/Result'
import ClientEntity from './ClientEntity'
import { IScheduleEntity, ScheduleStatus } from './IScheduleEntity'
import { IScheduler } from './IScheduler'
import { IUserEntity } from './IUserEntity'
import ScheduleEntity from './ScheduleEntity'

export default class Scheduler implements IScheduler {
  schedules: IScheduleEntity[] = []

  schedule(
    client: ClientEntity,
    employee: IUserEntity,
    datetime: Date,
    status: ScheduleStatus
  ): Result<IScheduleEntity | { error: string }> {
    if (this.clientHasOpenSchedule(client)) {
      return Result.fail('Client already has an opened schedule')
    }

    const result = ScheduleEntity.create(client, employee, datetime, status)
    let schedule: ScheduleEntity
    if (result.isSuccess) {
      schedule = result.getValue() as ScheduleEntity
      if (schedule.status === ScheduleStatus.Open) {
        this.addSchedule(schedule)
        return Result.ok(schedule)
      } else {
        return Result.fail('Cannot create schedule not opened')
      }
    }
    return Result.fail('Cannot create schedule')
  }
  addSchedule(schedule: IScheduleEntity): void {
    this.schedules.push(schedule)
  }
  removeSchedule(schedule: IScheduleEntity): void {
    this.schedules.splice(this.schedules.indexOf(schedule), 1)
  }
  findScheduleByClient(client: ClientEntity): boolean {
    return (
      this.schedules.find((schedule) => schedule.client.id === client.id) !==
      undefined
    )
  }
  clientHasOpenSchedule(client: ClientEntity): boolean {
    return (
      this.schedules.find(
        (schedule) =>
          schedule.client.id === client.id &&
          schedule.status === ScheduleStatus.Open
      ) !== undefined
    )
  }
  scheduleIsFinished(schedule: IScheduleEntity): boolean {
    if (schedule.status !== ScheduleStatus.Finished) {
      return false
    }
    const scheduleFound = this.schedules.find(
      (scheduleItem) => scheduleItem.id === schedule.id
    )
    if (scheduleFound) {
      return scheduleFound.status === ScheduleStatus.Finished
    }
    return false
  }
  scheduleIsCancelled(schedule: IScheduleEntity): boolean {
    if (schedule.status === ScheduleStatus.Cancelled) {
      return true
    }
    const scheduleFound = this.schedules.find(
      (scheduleItem) => scheduleItem.id === schedule.id
    )
    if (scheduleFound) {
      return scheduleFound.status === ScheduleStatus.Cancelled
    }
    return false
  }
}
