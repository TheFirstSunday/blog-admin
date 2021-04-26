import * as React from 'react'
import { SchemaForm } from '@/components'

const schema = [
  { key: 'name', name: '姓名', required: true },
  { key: 'age', name: '年龄', required: false }
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
