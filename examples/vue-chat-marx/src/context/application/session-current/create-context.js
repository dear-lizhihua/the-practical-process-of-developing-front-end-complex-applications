export const createApplicationSessionCurrentContext = ({helper, application}) => {
  const applicationSessionCurrentContext = Object.create(null)
  helper.createInnerValues(applicationSessionCurrentContext, {
    currentSessionId: '', // 当前选中的 session id
    currentSession: {
      id: null,
      user: {
        name: '',
        img: '',
      },
      messages: [],
    }, // 当前选中的 session 对象
  })
  applicationSessionCurrentContext.setCurrentSession = (currentSession) => {
    applicationSessionCurrentContext.inner.values.currentSessionId = currentSession.id
    applicationSessionCurrentContext.inner.values.currentSession = currentSession
  }
  applicationSessionCurrentContext.getCurrentSessionId = () => applicationSessionCurrentContext.inner.values.currentSessionId
  applicationSessionCurrentContext.getCurrentSession = () => applicationSessionCurrentContext.inner.values.currentSession
  applicationSessionCurrentContext.formatTime = (date) => {
    if (typeof date === 'number') date = new Date(date)
    return date.getHours() + ':' + date.getMinutes()
  }
  applicationSessionCurrentContext.pushMessage = (message) => {
    const currentSession = applicationSessionCurrentContext.getCurrentSession()
    currentSession.messages.push({
      content: message,
      date: Date.now(),
      self: true
    })
    application.sessionList.syncSession(currentSession)
  }
  return applicationSessionCurrentContext
}
