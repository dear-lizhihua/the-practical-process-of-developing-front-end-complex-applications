const app = {
  component: 'App',
  children: [{
    component: 'Root', state: {},
    children: [
      {component: 'Header', state: {}},
      {
        component: 'Main', state: {},
        children: [{
          component: 'Article', state: {},
          component: 'Article', state: {},
        }]
      },
      {
        component: 'Aside', state: {},
        children: [{
          component: 'Item', state: {},
          component: 'Item', state: {},
          component: 'Item', state: {},
        }]
      },
    ]
  }],
}
