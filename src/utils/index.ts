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
