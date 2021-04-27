type SetPlaceholder = (type: string, requiredText: string) => string | undefined

const setPlaceholder: SetPlaceholder = (type, requiredText) => {
  if (type === 'datePicker' || type === 'rangePicker') return

  return requiredText
}

export default setPlaceholder
