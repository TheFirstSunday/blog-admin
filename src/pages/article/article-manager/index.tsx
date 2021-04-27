import * as React from 'react'
import { SchemaForm } from '@/components'

const schema = [
  { key: 'name', name: '姓名', required: true },
  { key: 'age', name: '年龄', type: 'number', required: true },
  { key: 'datePicker', name: '时间', type: 'datePicker', required: true },
  { key: 'rangePicker', name: 'range', type: 'rangePicker', required: true },
  { key: 'timePicker', name: 'timePicker', type: 'timePicker' },
  { key: 'cascader', name: 'cascader', type: 'cascader' },
  { key: 'autoComplete', name: 'autoComplete', type: 'autoComplete' },
  {
    key: 'select',
    name: 'select',
    type: 'select',
    fieldProps: {
      options: [
        {
          label: 'Timestamp',
          value: 'timestamp'
        },
        {
          label: 'Timestring',
          value: 'timestring'
        },
        {
          label: 'Stamparray',
          value: 'stamparray'
        },
        {
          label: 'Stampobject',
          value: 'stampobject'
        }
      ]
    }
  }
]
const ArticleManager = () => {
  const formProps = {
    schema
  }
  return (
    <>
      <div>SchemaForm demo</div>
      <SchemaForm {...formProps} />
    </>
  )
}

export default ArticleManager
