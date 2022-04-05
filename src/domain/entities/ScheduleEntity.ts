import { Result } from '../../utilities/Result'
import ClientEntity from './ClientEntity'
import {
  ClientInfo,
  EmployeeInfo,
  IScheduleEntity,
  ScheduleStatus,
} from './IScheduleEntity'
import { IUserEntity } from './IUserEntity'

export default class ScheduleEntity extends IScheduleEntity {
  public static create(
    client: ClientInfo,
    employee: EmployeeInfo,
    datetime: Date,
    status: ScheduleStatus = ScheduleStatus.Open,
    description: string = ''
  ): Result<IScheduleEntity> {
    if (!client) return Result.fail('Client is invalid')
    if (!employee) return Result.fail('Employee is invalid')

    ScheduleEntity.validateDatetime(datetime)
    ScheduleEntity.validateStatus(status)

    return Result.ok<IScheduleEntity>(
      new ScheduleEntity(client, employee, datetime, status, description)
    )
  }

  // static validateDatetime(datetime: Date) {
  //   const scheduleTimestamp = datetime.getTime()
  //   const eightHoursTimestamp = 1648897200000
  //   const twelveHoursTimestamp = 1648911600000
  //   const thirteenHoursTimestamp = 1648915200000
  //   const sixteenHoursTimestamp = 1648933200000

  //   if (scheduleTimestamp < eightHoursTimestamp)
  //     return Result.fail('Time cannot be less than 08:00 hours (pm)')
  //   if (
  //     scheduleTimestamp > twelveHoursTimestamp &&
  //     scheduleTimestamp < thirteenHoursTimestamp
  //   )
  //     return Result.fail(
  //       'Time cannot be more than 12:00 and less than 13:00 hours (pm)'
  //     )
  //   if (scheduleTimestamp > sixteenHoursTimestamp)
  //     return Result.fail('Time cannot be more than 18:00 hours (pm)')

  //   return true
  // }

  static validateStatus(status: ScheduleStatus = ScheduleStatus.Open) {
    if (
      status !== ScheduleStatus.Open &&
      status !== ScheduleStatus.Cancelled &&
      status !== ScheduleStatus.Finished
    ) {
      return Result.fail('Status is not valid')
    }
    return true
  }
}
