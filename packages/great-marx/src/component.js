export const createComponentContext = ({components}) => {
  const componentContext = Object.create(null)
  components.map(component => {
    const {name, fn: createComponentContext, option} = component
    const componentContext = createComponentContext({}, option ? option : undefined)
    componentContext[name] = componentContext
  })
  return componentContext
}
