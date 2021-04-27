import * as React from 'react'
import { Form, Button } from 'antd'
import { baseType, extendType } from '@/constants/fieldTypes'
import { getRules, getRequiredText, setPlaceholder } from './utils'

const Children = { ...baseType, ...extendType }

const { Item: FormItem } = Form
const SchemaForm = ({ schema, data, ...props }) => {
  const [form] = Form.useForm()
  const onFinish = (...rest) => {
    console.log('rest', rest)
  }

  return (
    <Form form={form} onFinish={onFinish}>
      {schema.map(({ key, name, required, rules = [], type = 'input', fieldProps, ...props }) => {
        const Child = Children[type]
        const requiredText = getRequiredText(type, name, props)

        return (
          <FormItem
            key={key}
            name={name}
            label={name}
            rules={getRules(required, rules, requiredText)}
            {...props}
          >
            <Child placeholder={setPlaceholder(type, requiredText)} {...fieldProps} />
          </FormItem>
        )
      })}
      <FormItem>
        <Button htmlType="submit">搜索</Button>
        <Button htmlType="reset">重置</Button>
      </FormItem>
    </Form>
  )
}

export default SchemaForm
