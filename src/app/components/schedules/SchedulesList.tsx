const SchedulesList = () => {
  const schedules: string[] = []

  return (
    <>
      <div className="flex flex-col gap-y-1 px-12">
        <div className="flex gap-[90px] overflow-hidden pl-5 pb-2 text-sm text-gray-500">
          <div className="w-1/6 overflow-hidden lg:w-1/6 xl:w-1/6">ID</div>
          <div className="w-1/6 overflow-hidden lg:w-1/6 xl:w-1/6">Cliente</div>
          <div className="w-1/6 overflow-hidden lg:w-1/6 xl:w-1/6">Motivo</div>
          <div className="w-1/6 overflow-hidden lg:w-1/6 xl:w-1/6">Técnico</div>
          <div className="w-1/6 overflow-hidden lg:w-1/6 xl:w-1/6">Status</div>
          <div className="w-1/6 overflow-hidden lg:w-1/6 xl:w-1/6">
            Agendado em
          </div>
          <div className="flex-4 flex w-1/6 overflow-hidden lg:w-1/6 xl:w-1/6"></div>
        </div>
        {schedules.length > 0 ? (
          schedules.map((schedule, index) => {
            return (
              <div
                key={index}
                className="flex flex-wrap justify-between gap-y-2 overflow-hidden rounded-xl bg-white py-6 pl-4 shadow-sm"
              >
                {/* <SchedulesListItem schedule={schedule} key={schedule.id} /> */}
              </div>
            )
          })
        ) : (
          <h3 className="text-slate-500">Não possui agendamentos ainda.</h3>
        )}
      </div>
    </>
  )
}

export default SchedulesList
