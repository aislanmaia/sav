import ClientEntity from '../../domain/entities/ClientEntity'
import { IScheduleEntity } from '../../domain/entities/IScheduleEntity'
import { IUserEntity } from '../../domain/entities/IUserEntity'

export type ClientInfoDTO = {
  [key in Extract<keyof ClientEntity, 'id' | 'name'>]: ClientEntity[key]
}

export type EmployeeInfoDTO = {
  [key in Extract<keyof IUserEntity, 'id' | 'name'>]: IUserEntity[key]
}

export default class ScheduleDTO extends IScheduleEntity {}
