import { Result } from '../../utilities/Result'
import ClientEntity from './ClientEntity'
import { IUserEntity } from './IUserEntity'

export enum ScheduleStatus {
  Open = 'open',
  Cancelled = 'cancelled',
  Finished = 'finished',
}

export type ClientInfo = {
  [key in Extract<keyof ClientEntity, 'id' | 'name'>]: ClientEntity[key]
}

export type EmployeeInfo = {
  [key in Extract<keyof IUserEntity, 'id' | 'name'>]: IUserEntity[key]
}

export abstract class IScheduleEntity {
  id?: number | string
  client: ClientInfo
  employee: EmployeeInfo
  datetime: Date
  status: ScheduleStatus
  description: string

  constructor(
    client: ClientInfo,
    employee: EmployeeInfo,
    datetime: Date,
    status: ScheduleStatus = ScheduleStatus.Open,
    description: string,
    id?: number | string
  ) {
    this.client = client
    this.employee = employee
    this.datetime = datetime
    this.status = status
    this.description = description
    this.id = id
  }

  static validateDatetime(datetime: Date) {
    console.log('validateDatetime')
    console.log('datetime', datetime)
    const scheduleTimestamp = datetime.getTime()
    const eightHoursTimestamp = new Date(datetime).setHours(8, 0, 0, 0)
    const twelveHoursTimestamp = new Date(datetime).setHours(12, 0, 0, 0)
    const thirteenHoursTimestamp = new Date(datetime).setHours(13, 0, 0, 0)
    const sixteenHoursTimestamp = new Date(datetime).setHours(18, 0, 0, 0)
    // 1649271420000
    console.log('scheduleTimestamp', scheduleTimestamp)

    if (scheduleTimestamp < eightHoursTimestamp)
      return Result.fail('Time cannot be less than 08:00 hours (pm)')
    if (
      scheduleTimestamp > twelveHoursTimestamp &&
      scheduleTimestamp < thirteenHoursTimestamp
    )
      return Result.fail(
        'Time cannot be more than 12:00 (am) and less than 13:00 hours (pm)'
      )
    if (scheduleTimestamp > sixteenHoursTimestamp)
      return Result.fail('Time cannot be more than 18:00 hours (pm)')

    return true
  }
}
