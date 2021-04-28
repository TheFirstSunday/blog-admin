type RequiredText = (
  type: string,
  name: string,
  props: { placeholder?: string; [propName: string]: any }
) => string

const getRequiredText: RequiredText = (type, name, props) => {
  const { placeholder } = props

  if (placeholder) return placeholder
  let requiredText
  switch (type) {
    case 'input':
    case 'textarea':
    case 'number':
    case 'autoComplete':
      requiredText = `请输入${name}`
      break
    case 'switch':
    case 'radio':
    case 'select':
    case 'cascader':
    case 'datePicker':
    case 'rangePicker':
    case 'timePicker':
      requiredText = `请选择${name}`
      break
    case 'inputSelect':
      requiredText = `请至少选择一种${name}，并输入`
      break
    default:
      requiredText = ''
  }

  return requiredText
}

export default getRequiredText
