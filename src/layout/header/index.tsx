import * as React from 'react'
import { Dropdown, Menu, Avatar } from 'antd'
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons'
import styles from '../index.module.less'

// header
export default () => {
  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<SettingOutlined />}>
        重置密码
      </Menu.Item>
      <Menu.Item key="2" icon={<LogoutOutlined />}>
        退出登录
      </Menu.Item>
    </Menu>
  )
  return (
    <div className={styles['dropdown-container']}>
      <Dropdown overlay={menu}>
        <div>
          <Avatar size="small" icon={<UserOutlined />} />
          &nbsp; Sunday
        </div>
      </Dropdown>
    </div>
  )
}
