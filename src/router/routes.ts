import * as React from 'react'

export default [
  {
    name: '首页',
    path: '/',
    component: React.lazy(() => import('@/pages/home'))
  },
  {
    name: '新增文章',
    path: '/article/addArticles',
    component: React.lazy(() => import('@/pages/article/add-article'))
  },
  {
    name: '文章管理',
    path: '/article/articleManager',
    component: React.lazy(() => import('@/pages/article/article-manager'))
  },
  {
    name: '用户管理',
    path: '/user-manager',
    component: React.lazy(() => import('@/pages/user/user-manager'))
  }
]
