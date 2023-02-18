export const createApplicationUserContext = ({helper}, {option}) => {
  const applicationUserContext = Object.create(null)
  helper.createInnerValues(applicationUserContext, option)
  return applicationUserContext
}
