import * as React from 'react'
import { Result, Button } from 'antd'
import { Link } from 'react-router-dom'

const NotAuthorized = () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Link
          to={{
            pathname: '/'
          }}
        >
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  )
}

export default NotAuthorized
