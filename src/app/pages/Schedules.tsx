import { useEffect, useState } from 'react'
// import ScheduleDTO from '../../data/dto/ScheduleDTO'
import ScheduleNewDialog from '../components/schedules/ScheduleNewDialog'

import SchedulesList from '../components/schedules/SchedulesList'
// import { useSchedulesStore } from '../stores/schedules'

const Schedules = () => {
  const [showNewDialog, setShowNewDialog] = useState(false)
  // const schedulesStore = useSchedulesStore()

  const createSchedule = (/*data: ScheduleDTO*/) => {
    // console.log('data', data)
    // schedulesStore.createSchedule(data)
  }

  useEffect(() => {
    // employeesStore.getAllUsers()
  }, [])

  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="flex place-content-between p-12">
        <div className="text-3xl font-semibold">Agendamentos</div>
        <button
          className="w-full rounded-lg bg-indigo-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-indigo-500 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
          onClick={() => setShowNewDialog(true)}
        >
          + Adicionar
        </button>
      </div>
      <div>
        <SchedulesList key={Math.random() * 10000000} />
        {showNewDialog ? (
          <ScheduleNewDialog
            isOpen={showNewDialog}
            key={Math.random() * 100000}
            setIsOpen={(value) => setShowNewDialog(value)}
            // confirm={(schedule) => createSchedule(schedule as ScheduleDTO)}
            confirm={(schedule) => console.log('create schedule', schedule)}
          />
        ) : null}
      </div>
    </div>
  )
}

export default Schedules
