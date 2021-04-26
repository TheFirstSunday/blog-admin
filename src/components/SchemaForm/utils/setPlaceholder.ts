const setPlaceholder = ({ props = {}, type }, requiredText) => {
  if (type === 'datetimeRange') return
  if (props.placeholder === false || !requiredText) {
    // 日期组件自带 placeholder
    delete props.placeholder
  } else {
    props.placeholder = requiredText
  }
}

export default setPlaceholder
