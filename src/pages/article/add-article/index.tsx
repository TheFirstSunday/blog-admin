import * as React from 'react'
import { Form, Input, Select, Button, Checkbox } from 'antd'
import gfm from 'remark-gfm'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css'

const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters']
const { Option } = Select
const AddArticles = () => {
  const [selectedItems, setSelectedItems] = React.useState([])
  function handleEditorChange({ html, text }) {
    console.log('handleEditorChange', html, text)
  }
  const mdParser = new MarkdownIt(/* Markdown-it options */)

  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  const handleChange = (selectedItems: React.SetStateAction<never[]>) => {
    setSelectedItems(selectedItems)
  }
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o))

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item label="标题" name="标题" rules={[{ required: true, message: '请输入文章标题!' }]}>
        <Input placeholder="请输入文章标题!" />
      </Form.Item>

      <Form.Item label="标签" name="标签" rules={[{ required: true, message: '请选择标签!' }]}>
        <Select
          mode="multiple"
          placeholder="请选择标签"
          value={selectedItems}
          onChange={handleChange}
          style={{ width: '100%' }}
        >
          {filteredOptions.map((item) => (
            <Option key={item} value={item}>
              {item}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item label="标签" name="标签" rules={[{ required: true, message: '请选择标签!' }]}>
        <Select
          mode="multiple"
          placeholder="请选择标签"
          value={selectedItems}
          onChange={handleChange}
          style={{ width: '100%' }}
        >
          {filteredOptions.map((item) => (
            <Option key={item} value={item}>
              {item}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <MdEditor
        style={{ height: '500px' }}
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
      />

      <Form.Item>
        <Button type="primary" htmlType="submit">
          创建文章
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AddArticles
