const getRequiredText = (type, name, props) => {
  const { placeholder } = props

  if (placeholder) return placeholder
  let requiredText
  switch (type) {
    case 'input':
    case 'textarea':
    case 'number':
    case 'positiveInteger':
    case 'editor':
    case 'tags':
    case 'email':
      requiredText = `请输入${name}`
      break
    case 'enums':
    case 'select':
    case 'boolean':
    case 'time':
    case 'milliSecond':
    case 'radioGroup':
    case 'fileUpload':
    case 'dateRange':
    case 'datetimeRange':
    case 'date':
    case 'datetime':
    case 'uploadGroup':
    case 'checkboxGroup':
    case 'cityPicker':
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
