import * as React from 'react'
import { Space, Tag } from 'antd'
import { SchemaForm, SchemaTable } from '@/components'

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
const tableSchema = [
  {
    key: 'name',
    name: '姓名',
    type: 'input'
  },
  {
    key: 'age',
    name: '年龄',
    type: 'input'
  },
  {
    key: 'address',
    name: 'address',
    type: 'input'
  }
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
    // tags: ['nice', 'developer']
  }
  // {
  //   key: '2',
  //   name: 'Jim Green',
  //   age: 42,
  //   address: 'London No. 1 Lake Park',
  //   tags: ['loser']
  // },
  // {
  //   key: '3',
  //   name: 'Joe Black',
  //   age: 32,
  //   address: 'Sidney No. 1 Lake Park',
  //   tags: ['cool', 'teacher']
  // }
]

const ArticleManager = () => {
  const formProps = {
    schema
  }
  const tableProps = {
    columns: tableSchema,
    dataSource: data
  }
  return (
    <>
      <div>SchemaForm demo</div>
      <SchemaForm {...formProps} />
      <SchemaTable {...tableProps} />
    </>
  )
}

export default ArticleManager
