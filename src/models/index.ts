// const requireAll = (requireContext) => Object.keys(requireContext).map(requireContext)
const requireAll = (requireContext) => Object.keys(requireContext)

const res = import.meta.glob('./*.ts')
const models = requireAll(res).reduce((_models, module) => Object.assign(_models, module), {})
models.default && delete models.default
export default models
