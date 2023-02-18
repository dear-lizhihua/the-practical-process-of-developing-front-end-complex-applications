export const createApplicationSessionTextContext = ({helper, application}) => {
  const applicationSessionTextContext = Object.create(null)
  helper.createInnerValues(applicationSessionTextContext, {
    content: '',
  })
  applicationSessionTextContext.setContext = (content) => applicationSessionTextContext.inner.values.content = content
  applicationSessionTextContext.getContext = () => applicationSessionTextContext.inner.values.content
  applicationSessionTextContext.inputContext = (content) => applicationSessionTextContext.setContext(content)
  applicationSessionTextContext.sendMessage = (event) => {
    if (event.ctrlKey && event.keyCode === 13 && event.target.value.length) {
      application.sessionCurrent.pushMessage(event.target.value)
      applicationSessionTextContext.setContext('')
    }
  }
  return applicationSessionTextContext
}
