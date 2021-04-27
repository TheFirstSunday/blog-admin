import * as React from 'react'
import { Form, Button, Space, Col } from 'antd'
import { baseType, extendType } from '@/constants/fieldTypes'
import { getRules, getRequiredText, setPlaceholder } from './utils'

const Children = { ...baseType, ...extendType }

const { Item: FormItem } = Form
const SchemaForm = ({ schema, data, ref, ...props }) => {
  const [form] = Form.useForm()
  const onFinish = (...rest) => {
    console.log('rest', rest)
  }

  React.useImperativeHandle(ref, () => ({
    getForm: () => form
  }))

  React.useEffect(() => {
    form.setFieldsValue(data)
  }, [])

  return (
    <Form form={form} onFinish={onFinish}>
      {schema.map(
        ({ key, name, required, rules = [], type = 'input', column, fieldProps, ...props }) => {
          const Child = Children[type]
          const requiredText = getRequiredText(type, name, props)
          const BaseFormItem = () => (
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

          return (
            <React.Fragment key={key}>
              {column ? <Col span={24 / column}>BaseFormItem</Col> : <BaseFormItem />}
            </React.Fragment>
          )
        }
      )}
      <FormItem>
        <Space size="small">
          <Button htmlType="submit">搜索</Button>
          <Button htmlType="reset">重置</Button>
        </Space>
      </FormItem>
    </Form>
  )
}

export default SchemaForm
