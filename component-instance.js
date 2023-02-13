const componentRender = function() {
  return {
    file: ''
  }
}

const componentInstance1 = componentRender()
const componentInstance2 = componentRender()

const changeFile = (componentInstance) => componentInstance.file = 'file'
changeFile(componentInstance1)
console.log(componentInstance1)
console.log(componentInstance2)
