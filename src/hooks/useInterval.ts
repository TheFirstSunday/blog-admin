import { useEffect, useRef } from 'react'

/**
 * @param fn 要重复调用的函数
 * @param delay 间隔时间，当取值为 null 或 undefined 时会停止计时器
 * @param options immediate 参数可以用来控制是否在首次渲染时立即执行
 * */
function useInterval(
  fn: () => void,
  delay: number | null | undefined,
  options?: {
    immediate?: boolean
  }
): void {
  const immediate = options?.immediate

  const fnRef = useRef<() => void>()
  fnRef.current = fn

  useEffect(() => {
    if (delay === undefined || delay === null) return
    if (immediate) {
      fnRef.current?.()
    }
    const timer = setInterval(() => {
      fnRef.current?.()
    }, delay)
    return () => {
      clearInterval(timer)
    }
  }, [delay])
}

export default useInterval
