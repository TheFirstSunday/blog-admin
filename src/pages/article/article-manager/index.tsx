import * as React from 'react'
import { SchemaForm } from '@/components'

const schema = [
  { key: 'name', name: '姓名', required: true },
  { key: 'age', name: '年龄', type: 'number', required: true },
  { key: 'datePicker', name: '时间', type: 'datePicker', required: true },
  { key: 'rangePicker', name: 'range', type: 'rangePicker', required: true },
  { key: 'timePicker', name: 'timePicker', type: 'timePicker' },
  { key: 'cascader', name: 'cascader', type: 'cascader' },
  { key: 'autoComplete', name: 'autoComplete', type: 'autoComplete' }
]
const ArticleManager = () => {
  const formProps = {
    schema
  }
  return (
    <>
      <div>文章管理</div>
      <SchemaForm {...formProps} />
    </>
  )
}

export default ArticleManager
