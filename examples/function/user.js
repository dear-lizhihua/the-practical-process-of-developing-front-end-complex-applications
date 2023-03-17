import {createContext} from './context.js'

const context1 = createContext({
  api: {
    getItem: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(1)
        }, 1000)
      })
    },
    getList: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([1, 2, 3])
        }, 1000)
      })
    },
  },
  option: {
    beforeGetList: () => {
      console.log(context1.data.list)
    },
    afterGetList: () => {
      console.log(context1.data.list)
    }
  }
})
context1.getList()
