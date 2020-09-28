import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '../store/index'
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  store.dispatch("fdsafdas",routes)
  store.commit("changeSelectedMoudle",routes.filter(item => item.meta.title == to.meta.moduleName)[0])
  store.commit("changeSelectdMenu",to.meta.title)
  next()
})
export default router
