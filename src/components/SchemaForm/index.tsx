import * as React from 'react'
import { Form, Input, Button } from 'antd'

const { Item: FormItem } = Form
const SchemaForm = ({ schema, data, ...props }) => {
  const [form] = Form.useForm()
  const onFinish = () => {}

  return (
    <Form form={form} onFinish={onFinish}>
      {schema.map(({ key, name, required, rules = [], type, ...props }) => {
        return (
          <FormItem
            key={key}
            name={name}
            label={name}
            rules={[{ required, message: 'requiredMessage' }, ...rules]}
            {...props}
          >
            <Input placeholder={`请输入${name}`} />
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
