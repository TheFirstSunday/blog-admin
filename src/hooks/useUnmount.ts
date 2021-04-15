import { useEffect } from 'react'
import { isFunction } from '@/utils'
import usePersistFn from './usePersistFn'

const useUnmount = (fn: any) => {
  const fnPersist = usePersistFn(fn)

  useEffect(
    () => () => {
      if (isFunction(fnPersist)) {
        fnPersist()
      }
    },
    [fnPersist]
  )
}

export default useUnmount
