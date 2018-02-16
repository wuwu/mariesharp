import Vue from 'vue'
import Router from 'vue-router'
import Front from '~/pages/index'
import About from '~/pages/about/marie'
import Friends from '~/pages/friends/mr-nowimps'
import Shop from '~/pages/shop'
import Product from '~/pages/shop/Product'


Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Front, name: 'front' },
      { path: '/about', component: About, name: 'about' },
      { path: '/friends', component: Friends, name: 'friends' },
      { path: '/shop', component: Shop, name: 'shop' },
      { path: '/:shop/:slug', name: 'Product', component: Product }
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
