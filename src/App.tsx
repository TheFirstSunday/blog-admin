import * as React from 'react'
import moment from 'moment'
import { Provider } from 'mobx-react'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import 'moment/locale/zh-cn'
import RouterView from '@/router'
import { stores, StoresContext } from './store'

moment.locale('zh_CN')

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider {...stores}>
        <StoresContext.Provider value={stores}>
          <RouterView />
        </StoresContext.Provider>
      </Provider>
    </ConfigProvider>
  )
}

export default App
