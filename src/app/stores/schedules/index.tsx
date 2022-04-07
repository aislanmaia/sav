import { createState, Downgraded, useState } from '@hookstate/core'
import { Persistence } from '@hookstate/persistence'
import SchedulesRepository from '../../../data/datasources/SchedulesRepository'
import UsersRepository from '../../../data/datasources/UsersRepository'
import ScheduleDTO from '../../../data/dto/ScheduleDTO'
import UserEntity from '../../../domain/entities/UserEntity'
import CreateScheduleUseCase from '../../../domain/usecases/CreateScheduleUseCase'
import DeleteScheduleUseCase from '../../../domain/usecases/DeleteScheduleUseCase'
import GetAllUsersUseCase from '../../../domain/usecases/GetAllSchedulesUseCase'
import GetAllSchedulesUseCase from '../../../domain/usecases/GetAllSchedulesUseCase'
import LoginUserUseCase from '../../../domain/usecases/LoginUserUseCase'
import UpdateScheduleUseCase from '../../../domain/usecases/UpdateScheduleUseCase'
import { Result } from '../../../utilities/Result'

interface ScheduleState {
  schedules: ScheduleDTO[]
}

const store = createState<ScheduleState>({
  schedules: [],
})

export const useSchedulesStore = () => {
  const state = useState(store)
  state.attach(Persistence('schedules'))
  state.attach(Downgraded)

  return {
    get: () => state.value,

    async getAllSchedules(
      callback?: (result: ScheduleDTO[] | { error: string } | undefined) => void
    ) {
      const result = await new GetAllSchedulesUseCase(
        new SchedulesRepository()
      ).execute()
      if (result.isSuccess) {
        state.schedules.set(result.getValue() as ScheduleDTO[])
      } else {
        state.schedules.set([])
      }
      callback && callback(result.getValue() as ScheduleDTO[])
    },

    async createSchedule(
      user: ScheduleDTO,
      callback?: (result: UserEntity | { error: string } | undefined) => void
    ) {
      const result = await new CreateScheduleUseCase(
        new SchedulesRepository()
      ).execute(user)
      if (result.isSuccess) {
        state.schedules.merge([result.getValue() as ScheduleDTO])
        callback && callback(result.getValue() as UserEntity)
      }
    },

    async updateSchedule(
      schedule: ScheduleDTO,
      callback?: (result: Result<UserEntity | { error: string }>) => void
    ) {
      callback && callback(result as Result<{ error: string }>)
    },

    async deleteSchedule(
      id: string | number,
      callback?: (result: Result<ScheduleDTO | string>) => void
    ) {
      const result = await new DeleteScheduleUseCase(
        new SchedulesRepository()
      ).execute(id)
      if (result.isSuccess) {
        console.log('result', result)
        const schedules = state.schedules.get()
        const foundIndex = schedules.findIndex((schedule) => schedule.id === id)
        if (foundIndex > -1) {
          state.schedules.set((schedule) => {
            schedule.splice(foundIndex, 1)
            return schedule
          })
        }

        callback && callback(result as Result<ScheduleDTO>)
      }
      callback && callback(result as unknown as Result<string>)
    },
  }
}
