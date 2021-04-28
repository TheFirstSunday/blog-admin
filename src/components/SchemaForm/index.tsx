import * as React from 'react'
import { Form, Button, Space, Col } from 'antd'
import classNames from 'classnames'
import { baseType, extendType } from '@/constants/fieldTypes'
import { getRules, getRequiredText, setPlaceholder } from './utils'

import styles from './index.module.less'

const Children = { ...baseType, ...extendType }

const { Item: FormItem } = Form
const ignoreTypes = ['switch']
const SchemaForm = ({ schema, data, column, ref, ...props }) => {
  const [form] = Form.useForm()
  const onFinish = (...rest) => {
    console.log('rest', rest)
  }

  const formProps = {
    form,
    onFinish,
    labelAlign: 'right',
    className: classNames(styles['schema-form'], {
      [styles['flex-form']]: column
    })
  }

  React.useImperativeHandle(ref, () => ({
    getForm: () => form
  }))

  React.useEffect(() => {
    form.setFieldsValue(data)
  }, [])

  return (
    <Form {...formProps}>
      {schema.map(({ key, name, required, rules = [], type = 'input', fieldProps, ...props }) => {
        const Child = Children[type]
        const requiredText = getRequiredText(type, name, props)
        const defaultWidth = !ignoreTypes.includes(type) && '300px'

        const childProps = {
          placeholder: setPlaceholder(type, requiredText),
          style: { width: fieldProps?.width || defaultWidth },
          ...fieldProps
        }
        const BaseFormItem = () => (
          <FormItem
            key={key}
            name={name}
            label={name}
            rules={getRules(required, rules, requiredText)}
            {...props}
          >
            <Child {...childProps} />
          </FormItem>
        )

        return (
          <React.Fragment key={key}>
            {column ? (
              <Col span={24 / column}>
                <BaseFormItem />
              </Col>
            ) : (
              <BaseFormItem />
            )}
          </React.Fragment>
        )
      })}
      <Col span={24}>
        <FormItem>
          <Space size="large" className={styles['btn-group']}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
            <Button htmlType="reset">重置</Button>
          </Space>
        </FormItem>
      </Col>
    </Form>
  )
}

export default SchemaForm
