import { useEffect } from 'react'
import usePersistFn from './usePersistFn'

/**
 * @param fn 是你想要在到期时间(delay毫秒)之后执行的函数
 * @param delay 到期时间（单位为毫秒），当取值为 null 或 undefined 时会停止计时器
 * */
function useTimeout(fn: () => void, delay: number | null | undefined): void {
  const timerFn = usePersistFn(fn)

  useEffect(() => {
    if (delay === undefined || delay === null) return
    const timer = setTimeout(() => {
      timerFn()
    }, delay)
    return () => {
      clearTimeout(timer)
    }
  }, [delay, timerFn])
}

export default useTimeout
