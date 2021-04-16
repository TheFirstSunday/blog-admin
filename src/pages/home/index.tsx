import React, { useState } from 'react'
import { Form, Button, Input } from 'antd'
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { useDynamicList } from '@/hooks'

export default () => {
  const { list, remove, getKey, push } = useDynamicList(['David', 'Jack'])
  const [form] = Form.useForm()

  const [result, setResult] = useState('')

  const Row = (index: number, item: any) => (
    <div style={{ display: 'flex' }} key={getKey(index)}>
      <div>
        <Form.Item
          rules={[{ required: true, message: 'required' }]}
          name={['names', getKey(index)]}
          initialValue={item}
        >
          <Input style={{ width: 300 }} placeholder="Please enter your name" />
        </Form.Item>
      </div>
      <div style={{ marginTop: 4 }}>
        {list.length > 1 && (
          <MinusCircleOutlined
            style={{ marginLeft: 8 }}
            onClick={() => {
              remove(index)
            }}
          />
        )}
        <PlusCircleOutlined
          style={{ marginLeft: 8 }}
          onClick={() => {
            push('')
          }}
        />
      </div>
    </div>
  )

  return (
    <>
      <Form form={form}>{list.map((ele, index) => Row(index, ele))}</Form>
      <Button
        style={{ marginTop: 8 }}
        type="primary"
        onClick={() =>
          form
            .validateFields()
            .then((val) => {
              setResult(JSON.stringify((val || {}).names.filter((e: string) => !!e)))
            })
            .catch(() => {})
        }
      >
        Submit
      </Button>
      <div>{result}</div>
    </>
  )
}
