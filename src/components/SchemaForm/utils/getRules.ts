const getRules = (field, requiredText) => {
  const { required, type } = field
  let { rules = [] } = field

  if (required) {
    rules = [{ required: true, message: requiredText }, ...rules]
  }

  return rules
}
