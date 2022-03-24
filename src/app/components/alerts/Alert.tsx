import toast, { Toaster, useToaster } from 'react-hot-toast'

const Alert = () => {
  const { toasts, handlers } = useToaster()
  const { startPause, endPause, calculateOffset, updateHeight } = handlers
  return (
    <div
      style={{
        position: 'fixed',
        top: 10,
        left: 10,
      }}
      onMouseEnter={startPause}
      onMouseLeave={endPause}
    >
      {toasts.map((toast) => {
        const offset = calculateOffset(toast, {
          reverseOrder: false,
        })
        const ref = (el: any) => {
          if (el && !toast.height) {
            const height = el.getBoundingClientRect().height
            updateHeight(toast.id, height)
          }
        }
        return (
          <div
            key={toast.id}
            ref={ref}
            style={{
              position: 'absolute',
              width: '13rem',
              padding: '.7rem',
              background: 'rgba(175, 75, 62, 0.1)',
              borderRadius: '3rem',
              transition: 'all 0.2s',
              transform: `translateY(${offset}px)`,
              opacity: toast.visible ? 1 : 0,
            }}
          >
            {toast.message}
          </div>
        )
      })}
    </div>
  )
}

export default Alert
