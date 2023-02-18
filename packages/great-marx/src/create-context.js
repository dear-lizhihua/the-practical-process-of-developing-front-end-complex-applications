import {reactive} from 'vue'

export const createContext = (contextConfig) => {
  // 处理参数
  let {option: contextOption, lifecycles} = contextConfig
  contextConfig.applications = Array.isArray(contextConfig.applications) ? contextConfig.applications : []
  lifecycles = lifecycles || Object.create(null)

  // 创建上下文
  const context = Object.create(null)
  context.option = Object.create(null)
  context.application = Object.create(null)


  // 构造 service
  context.service = Object.create(null)
  context.service.methods = Object.create(null)
  Object.defineProperty(context.service, 'define', {
    enumerable: false,
    value: (methodName, methodFn) => {
      context.service.methods[methodName] = methodFn
    },
  })

  const createInnerValues = (moduleContext, initialValues) => {
    moduleContext.inner = Object.create(null)
    moduleContext.inner.values = reactive(initialValues)
  }
  const mergeApi = (moduleContext, initialApi) => {
    moduleContext.api = Object.create(null)
    Object.assign(moduleContext.api, initialApi)
  }

  const {applications} = contextConfig
  applications.map(application => {
    application.config = application.config || Object.create(null)
    context.application[application.name] = application.fn({
      application: context.application,
      contextOption,
      helper: {createInnerValues, mergeApi},
    }, application.config)
  })

  // 生命周期
  lifecycles.defineService({
    application: context.application,
    service: context.service,
  })

  return context
}
