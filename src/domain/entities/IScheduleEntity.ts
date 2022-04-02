import { Result } from '../../utilities/Result'
import ClientEntity from './ClientEntity'
import { IUserEntity } from './IUserEntity'

export enum ScheduleStatus {
  Open = 'open',
  Cancelled = 'cancelled',
  Finished = 'finished',
}

export abstract class IScheduleEntity {
  id?: number | string
  client: ClientEntity
  employee: IUserEntity
  datetime: Date
  status: ScheduleStatus

  constructor(
    client: ClientEntity,
    employee: IUserEntity,
    datetime: Date,
    status: ScheduleStatus = ScheduleStatus.Open,
    id?: number | string
  ) {
    this.client = client
    this.employee = employee
    this.datetime = datetime
    this.status = status
    this.id = id
  }
}
