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
    path: '/admin',
    icon: <HomeOutlined />,
    name: '首页'
  },
  {
    path: '/admin/article',
    icon: <SwitcherOutlined />,
    name: '文章',
    children: [
      {
        path: '/admin/article/articleManager',
        icon: <FolderOutlined />,
        name: '管理'
      },
      {
        path: '/admin/article/addArticles',
        icon: <EditOutlined />,
        name: '新增'
      }
    ]
  },
  {
    path: '/admin/user-manager',
    icon: <UserOutlined />,
    name: '用户管理'
  }
]

export default menu
