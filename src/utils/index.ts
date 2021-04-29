export function isFunction(obj: any): obj is Function {
  return typeof obj === 'function'
}

export function copy(text: string, callback: () => any) {
  const textArea = document.createElement('textarea')

  textArea.style.position = 'fixed'
  textArea.style.opacity = '0'
  textArea.value = text
  document.body.appendChild(textArea)
  textArea.select()
  document.execCommand('copy')
  document.body.removeChild(textArea)
  callback?.()
}

/**
 *
 * const users = {
 *   'barney':  { 'age': 36, 'active': true },
 *   'fred':    { 'age': 40, 'active': false },
 *   'pebbles': { 'age': 1,  'active': true }
 * }
 *
 * findKey(users, ({ age }) => age < 40)
 * // => 'barney' (iteration order is not guaranteed) */
export function findKey(
  object: { [x: string]: any } | null,
  predicate: (arg0: any, arg1: string, arg2: any) => any
) {
  let result
  if (object === null) {
    return result
  }
  // eslint-disable-next-line array-callback-return
  Object.keys(object).some((key) => {
    const value = object[key]
    if (predicate(value, key, object)) {
      result = key
      return true
    }
  })
  return result
}
