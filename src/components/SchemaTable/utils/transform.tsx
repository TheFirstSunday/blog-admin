import * as React from 'react'
import { Tooltip } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { findKey } from '@/utils'
import { detailBaseType as fieldTypes } from '@/constants/fieldTypes'

type GetFieldValue = (value: any, field: any, data: any) => React.ReactNode

const getFieldValue: GetFieldValue = (value, field = {}, data) => {
  if (!Object.keys(fieldTypes).length) {
    throw new Error('table fieldTypes is empty!')
  }

  let type = field.type || (field.enums && 'enum')
  // eslint-disable-next-line no-prototype-builtins
  type = fieldTypes.hasOwnProperty(type) ? type : 'input'
  console.log(fieldTypes[type](value, field, data))
  return fieldTypes[type](value, field, data)
}

export default (fields) =>
  fields.map((field) => {
    const { key, name, value, data } = field
    // const { render } = field
    console.log(field)

    field.title = name
    const render = (value, data) => getFieldValue(value, field, data)

    return {
      name,
      title: name,
      dataIndex: key,
      render
    }
  })
