type GetRules = (required?: boolean | undefined, rules?: [], requiredText?: string) => any[]

const getRules: GetRules = (required, rules = [], requiredText) => {
  if (required) return [{ required, message: requiredText }, ...rules]

  return rules
}

export default getRules
