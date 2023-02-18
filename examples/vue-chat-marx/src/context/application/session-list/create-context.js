import { debounce } from 'lodash-es'

export const createApplicationSessionListContext = ({helper, application}, {api}) => {
  const applicationSessionListContext = Object.create(null)
  helper.mergeApi(applicationSessionListContext, api)
  helper.createInnerValues(applicationSessionListContext, {
    list: [],
    keyword: '', // 过滤出只包含这个keyword的会话
  })

  applicationSessionListContext.getList = () => {
    return applicationSessionListContext.inner.values.list.filter(session => {
      return session.user.name.includes(applicationSessionListContext.getKeyword())
    })
  }
  applicationSessionListContext.getKeyword = () => applicationSessionListContext.inner.values.keyword
  applicationSessionListContext.getSessionList = async () => {
    let sessionData = localStorage.getItem('vue-chat-session')
    if (sessionData) {
      applicationSessionListContext.inner.values.list = JSON.parse(sessionData)
      application.sessionCurrent.setCurrentSession(sessionData[0])
    } else {
      try {
        const result = await applicationSessionListContext.api.getSessionList()
        applicationSessionListContext.inner.values.list = result.data
        application.sessionCurrent.setCurrentSession(result.data[0])
      } catch (error) {
        console.error(error)
      }
    }
  }
  applicationSessionListContext.search = debounce((keyword) => {
    applicationSessionListContext.inner.values.keyword = keyword
  }, 150)
  applicationSessionListContext.selectSession = (session) => {
    application.sessionCurrent.setCurrentSession(session)
  }
  applicationSessionListContext.syncSession = (session) => {
    const index = applicationSessionListContext.inner.values.list.findIndex(item => item.id === session.id)
    applicationSessionListContext.getList().splice(index, 1, session)
  }
  return applicationSessionListContext
}
