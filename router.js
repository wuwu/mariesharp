import Vue from 'vue'
import Router from 'vue-router'
import Front from '~/pages/index'
import About from '~/pages/about/marie'
import Friends from '~/pages/friends/mr-nowimps'
import Shop from '~/pages/shop'
import Product from '~/pages/shop/product'
import AllNatural from '~/pages/allnatural'
import ImLaden from '~/pages/laden'
import Lieferbedingungen from '~/pages/lieferbedingungen'
import Impressum from '~/pages/impressum'
import Kontakt from '~/pages/contact'


Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Front, name: 'front' },
      { path: '/about', component: About, name: 'about' },
      { path: '/friends', component: Friends, name: 'friends' },
      { path: '/all-natural', component: AllNatural, name: 'allnatural' },
      { path: '/laden', component: ImLaden, name: 'imladen' },
      { path: '/lieferbedingungen', component: Lieferbedingungen, name: 'lieferbedingungen' },
      { path: '/kontakt', component: Kontakt, name: 'kontakt' },
      { path: '/impressum', component: Impressum, name: 'impressum' },
      { path: '/shop', component: Shop, name: 'shop' },
      { path: '/:shop/:slug', name: 'product', component: Product }
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
