import { useRef } from 'react'

function depsAreSame(oldDeps: any[], deps: any[]): boolean {
  if (oldDeps === deps) return true
  for (const i in oldDeps) {
    if (oldDeps[i] !== deps[i]) return false
  }
  return true
}

/**
 * @param factory 用来创建所需对象的函数
 * @param deps 传入依赖变化的对象
 * */
export default function useCreation<T>(factory: () => T, deps: any[]) {
  const { current } = useRef({
    deps,
    obj: undefined as undefined | T,
    initialized: false
  })
  if (!current.initialized || !depsAreSame(current.deps, deps)) {
    current.deps = deps
    current.obj = factory()
    current.initialized = true
  }
  return current.obj as T
}
