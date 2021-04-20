import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Spin } from 'antd'
import SLayout from '@/layout'
import routers from './routes'

const NotFound = <div>notfound</div>

const RouterView = () => {
  return (
    <Router basename="/admin">
      <SLayout>
        <React.Suspense
          fallback={
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <Spin tip="Loading..." />
            </div>
          }
        >
          <Switch>
            {routers.map((route, index) => (
              <Route exact key={index} {...route} />
            ))}
            <Route>{NotFound}</Route>
          </Switch>
        </React.Suspense>
      </SLayout>
    </Router>
  )
}

export default RouterView
