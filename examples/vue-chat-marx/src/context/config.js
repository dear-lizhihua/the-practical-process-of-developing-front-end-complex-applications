export const applicationUserConfig = {
  option: {
    name: 'coffce',
    img: '/images/1.jpg'
  }
}
export const applicationSessionConfig = {
  api: {
    async getSessionList() {
      return new Promise((resolve) => {
        resolve({
          data: [
            {
              id: 1,
              user: {
                name: '示例介绍',
                img: '/images/2.png'
              },
              messages: [
                {
                  content: 'Hello，这是一个基于Vue + Vuex + Webpack构建的简单chat示例，聊天记录保存在localStorge, 有什么问题可以通过Github Issue问我。',
                  date: Date.now()
                }, {
                  content: '项目地址: https://github.com/coffcer/vue-chat',
                  date: Date.now() + 1
                }
              ]
            },
            {
              id: 2,
              user: {
                name: 'webpack',
                img: '/images/3.jpg'
              },
              messages: []
            }
          ]
        })
      })
    }
  },
}
