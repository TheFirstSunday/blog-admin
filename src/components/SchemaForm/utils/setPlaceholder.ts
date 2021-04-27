type SetPlaceholder = (type: string, requiredText: string) => string

const setPlaceholder: SetPlaceholder = (type, requiredText) => {
  if (type === 'datePicker' || type === 'rangePicker') return ''

  return requiredText
}

export default setPlaceholder
