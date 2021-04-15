import * as React from 'react'
import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Sidebar from './sidebar'
import SHeader from './header'

import styles from './index.module.less'

const { Header, Sider, Content } = Layout

interface IProps {
  children: React.ReactNode
}
const SLayout: React.FC<IProps> = ({ children }) => {
  const [collapsed, setCollapsed] = React.useState(false)
  const toggle = () => setCollapsed((state) => !state)

  return (
    <Layout className={styles['layout-conta']}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Link to="/admin" className={styles.logo}>
          <svg
            t="1618418557379"
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2533"
            width="32"
            height="32"
          >
            <path
              d="M868.17963 1006.142284 154.460396 1006.142284c-75.606978 0-137.116891-61.509912-137.116891-137.116891L17.343505 155.306158c0-75.606978 61.509912-137.116891 137.116891-137.116891l713.719234 0c75.606978 0 137.116891 61.509912 137.116891 137.116891L1005.296521 869.025393C1005.296521 944.631348 943.786609 1006.142284 868.17963 1006.142284zM154.460396 54.004985c-55.857169 0-101.301174 45.444005-101.301174 101.301174L53.159222 869.025393c0 55.858192 45.444005 101.301174 101.301174 101.301174l713.719234 0c55.858192 0 101.301174-45.442982 101.301174-101.301174L969.480804 155.306158c0-55.857169-45.442982-101.301174-101.301174-101.301174L154.460396 54.004985z"
              p-id="2534"
              fill="#0099FF"
            />
            <path
              d="M560.71705 282.996352c9.101285-17.739013 26.77276-36.885072 59.999512-52.903907C710.119755 186.991812 679.826821 69.756737 677.855934 64.092737s-29.308513 57.139372-112.554472 103.195314c-48.28675 26.714432-51.823296 75.413574-45.062312 115.708302L158.281421 282.996352 501.804289 887.925858l349.246219-604.930529L560.71705 282.995329zM209.260489 312.672232l317.873698 0c4.499477 15.482623 9.249665 27.496238 10.911514 33.094746 6.239098 21.017686 35.178197 113.446795 35.178197 113.446795l0.00614 0.008186c-15.066137-12.029988-34.30941-19.423375-55.396681-19.832697-49.411363-0.957815-90.215698 36.779671-91.136673 84.289732-0.920976 47.509037 38.388309 86.798878 87.801718 87.756693 49.411363 0.958838 90.213651-36.777625 91.136673-84.287685 0.159636-8.228405-0.889253-16.20917-2.987031-23.788799l0.002047 0.00307-0.075725-0.257873c-0.183172-0.653893-0.373507-1.303692-0.572028-1.951445L554.464649 338.952782c0 0-3.76065-10.694573-2.39249-26.28055l247.578702 0L502.017136 828.204685 209.260489 312.672232z"
              p-id="2535"
              fill="#0099FF"
            />
          </svg>
        </Link>
        <Sidebar />
      </Sider>
      <Layout className={styles['site-layout']}>
        <Header className={styles['site-layout-header']} style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: styles['trigger'],
            onClick: toggle
          })}
          <SHeader />
        </Header>
        <Content
          className={styles['site-layout-content']}
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default SLayout
