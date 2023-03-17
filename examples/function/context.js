export const createContext = ({api, option}) => {
  const context = Object.create(null)

  context.data = {
    item: 1,
    list: [],
  }
  context.beforeGetList = () => {}
  context.afterGetList = () => {}

  if (option.beforeGetList) context.beforeGetList = option.beforeGetList
  if (option.afterGetList) context.afterGetList = option.afterGetList

  context.getList = async () => {
    context.beforeGetList()
    const result = await api.getList()
    context.data.list = result
    // console.log(context.data.list)
    context.afterGetList()
  }
  context.getItem = async () => {
    context.beforeGetList()
    const result = await api.getItem()
    context.data.item = result
    // console.log(context.data.list)
    context.afterGetList()
  }
  return context
}
