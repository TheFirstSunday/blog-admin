import * as React from 'react'
import {
  EditOutlined,
  UserOutlined,
  HomeOutlined,
  FolderOutlined,
  SwitcherOutlined
} from '@ant-design/icons'

const menu = [
  {
    path: '/',
    icon: <HomeOutlined />,
    name: '首页'
  },
  {
    path: '/article',
    icon: <SwitcherOutlined />,
    name: '文章',
    children: [
      {
        path: '/article/articleManager',
        icon: <FolderOutlined />,
        name: '管理'
      },
      {
        path: '/article/addArticles',
        icon: <EditOutlined />,
        name: '新增'
      }
    ]
  },
  {
    path: '/user-manager',
    icon: <UserOutlined />,
    name: '用户管理'
  }
]

export default menu
