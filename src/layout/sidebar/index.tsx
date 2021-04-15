import * as React from 'react'
import { NavLink, withRouter, useLocation } from 'react-router-dom'
import { Menu, MenuItemProps } from 'antd'

import menus from '@/constants/menus'

const { SubMenu } = Menu
const getPath = (path: string) => (path?.startsWith('/') ? path : `/${path}`) || ''
function getOpenkeyByRoute(menus, pathname) {
  let selectedKeys: string[] = []
  let openKeys: string[] = []
  const path = pathname
  const traversedKeys: string[] = []

  function matchRoute(menus) {
    menus?.forEach((menu) => {
      const { hide, path: menuPath, relationPath, children } = menu

      if (!Object.prototype.hasOwnProperty.call(menu, 'key')) {
        menu.key = menu.path
      }

      if (!hide) {
        traversedKeys.push(menu.key)
        const routePath = path.startsWith('/') ? path : `/${path}`
        if (routePath.startsWith(getPath(menuPath))) {
          openKeys = [...traversedKeys]
        }
        matchRoute(children)
        traversedKeys.pop()
      }
    })
  }
  matchRoute(menus)

  if (openKeys.length) {
    selectedKeys = [openKeys.pop()]
  }

  return { openKeys, selectedKeys }
}

function renderMenuItem(menus: MenuItemProps) {
  // 菜单渲染
  const renderRoute = (item) => {
    if (item.hidden) return null

    if (item.children) {
      return (
        <SubMenu
          key={item.path}
          title={
            <span>
              {item.icon}
              <span>{item.name}</span>
            </span>
          }
        >
          {item.children.map((r) => renderRoute(r))}
        </SubMenu>
      )
    }
    return (
      item.name && (
        <Menu.Item key={item.path}>
          <NavLink to={item.path}>
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        </Menu.Item>
      )
    )
  }
  return menus.map((menu) => renderRoute(menu))
}

function Sidebar({ onChange, onClick }) {
  const { pathname } = useLocation()
  const [openKeys, setOpenKeys] = React.useState<string[]>([])
  const [selectedKeys, setSelectedKeys] = React.useState<string[]>([])

  const handleKeysChange = (keys: { selectedKey?: string; openKeys?: string[] }) => {
    if (keys.openKeys) {
      setOpenKeys(keys.openKeys)
    }
    if (keys.selectedKey) {
      setSelectedKeys([keys.selectedKey])
    }

    onChange?.(keys)
  }
  const handleClick = ({ key }: { key: string }) => {
    const keys = { selectedKey: key }

    onClick?.(keys)
    handleKeysChange(keys)
  }

  React.useEffect(() => {
    const { openKeys, selectedKeys } = getOpenkeyByRoute(menus, pathname)

    setOpenKeys(openKeys)
    setSelectedKeys(selectedKeys)
  }, [pathname])
  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      selectedKeys={selectedKeys}
      onOpenChange={(keys) => handleKeysChange({ openKeys: keys })}
      onClick={handleClick}
      style={{ height: 'calc(100% - 64px)', borderRight: 0 }}
    >
      {renderMenuItem(menus)}
    </Menu>
  )
}

export default withRouter(Sidebar)
