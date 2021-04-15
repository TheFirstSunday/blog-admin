import * as React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Spin } from 'antd'
import SLayout from '@/layout'
import routers from './routes'

const NotFound = <div>notfound</div>

const RouterView = () => {
  return (
    <BrowserRouter>
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
            <Redirect exact from="/" to={routers[0].path} />
            {routers.map((router, index) => (
              <Route exact key={index} {...router} />
            ))}
            <Route>{NotFound}</Route>
          </Switch>
        </React.Suspense>
      </SLayout>
    </BrowserRouter>
  )
}

export default RouterView
