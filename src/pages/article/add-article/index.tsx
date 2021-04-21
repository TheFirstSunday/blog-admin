import * as React from 'react'
import gfm from 'remark-gfm'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css'

const AddArticles = () => {
  function handleEditorChange({ html, text }) {
    console.log('handleEditorChange', html, text)
  }
  const mdParser = new MarkdownIt(/* Markdown-it options */)

  return (
    <>
      <div>addArticles</div>
      <MdEditor
        style={{ height: '500px' }}
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
      />
    </>
  )
}

export default AddArticles
