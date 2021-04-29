import * as React from 'react'
import { Table } from 'antd'
import transform from './utils/transform'

const SchemaTable = (props) => {
  const { columns } = props

  const tableProps = {
    columns: transform(columns),
    ...props
  }

  return <Table {...tableProps} />
}

export default SchemaTable
