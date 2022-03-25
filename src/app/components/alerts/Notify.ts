// import toast, { Toaster, resolveValue } from 'react-hot-toast'
// import classNames from 'classnames'
// // import styles from './Notify.module.css'
// import { ExclamationCircleIcon, XCircleIcon } from '@heroicons/react/solid'
// import { Transition } from '@headlessui/react'

// // const styles = {
// //   notificationWrapper:
// //     'relative flex w-96 translate-y-0 transform-gpu flex-row items-center justify-between rounded-xl bg-gray-900 px-4 py-6 text-white shadow-2xl transition-all duration-500 ease-in-out hover:translate-y-1 hover:shadow-none',
// //   iconWrapper: 'text-xl',
// //   contentWrapper:
// //     'ml-4 flex cursor-default flex-col items-start justify-center',
// //   closeIcon: 'absolute top-2 right-2 cursor-pointer text-lg',
// // }

// // const notify = () =>
// //   toast.custom(
// //     (t) => (
// //       <div
// //         className={classNames([
// //           styles.notificationWrapper,
// //           t.visible ? 'top-0' : '-top-96',
// //         ])}
// //       >
// //         <div className={styles.iconWrapper}>
// //           <ExclamationCircleIcon className="h-4 w-4" />
// //         </div>
// //         <div className={styles.contentWrapper}>
// //           <h1>New version available</h1>
// //           <p>
// //             An improved version of VESSEL is now available, refresh to update.
// //           </p>
// //         </div>
// //         <div className={styles.closeIcon} onClick={() => toast.dismiss(t.id)}>
// //           <XCircleIcon className="h-4 w-4" />
// //         </div>
// //       </div>
// //     ),
// //     { id: 'unique-notification', position: 'top-center' }
// //   )

// const notify = () => {
//   return (
//     <Toaster>
//       {(t) => (
//         <Transition
//           appear
//           show={t.visible}
//           className="transform rounded p-4 shadow-lg"
//           enter="transition-all duration-150"
//           enterFrom="opacity-0 scale-50"
//           enterTo="opacity-100 scale-100"
//           leave="transition-all duration-150"
//           leaveFrom="opacity-100 scale-100"
//           leaveTo="opacity-0 scale-75"
//         >
//           {resolveValue(t.message)}
//         </Transition>
//       )}
//     </Toaster>
//   )
// }

// export default notify
