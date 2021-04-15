import { createContext, useContext } from 'react'
import { RouterStore as BaseRouterStore, syncHistoryWithStore } from 'mobx-react-router'
import { createHashHistory } from 'history'
import models from '@/models'

const history = createHashHistory()

class RouterStore extends BaseRouterStore {
  constructor() {
    super()
    this.history = syncHistoryWithStore(history, this)
  }
}

const createStores = () => models
const stores = createStores()
const StoresContext = createContext(stores)
const useStores = () => useContext(StoresContext)

export const routerStore = new RouterStore()
export { stores, useStores, StoresContext }
