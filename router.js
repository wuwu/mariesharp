import Vue from 'vue'
import Router from 'vue-router'
import Front from '~/pages/index'
import About from '~/pages/about/marie'
import Friends from '~/pages/friends/mr-nowimps'


Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Front, name: 'front' },
      { path: '/about', component: About, name: 'about' },
      { path: '/friends', component: Friends, name: 'friends' }
    ],
    scrollBehavior (to, from, savedPosition) {
      // return desired position
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
  })
}
