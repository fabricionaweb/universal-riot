module.exports = [
  {
    path: '/',
    component: 'timer'
  },
  {
    path: '/about',
    component: 'about'
  },
  {
    path: '/post/:slug',
    component: 'post'
  },
  {
    path: '*',
    component: 'not-found'
  }
]
