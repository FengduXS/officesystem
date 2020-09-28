import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '../store/index'
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  store.commit("changeSelectedMoudle",routes.filter(item => item.meta.title == to.meta.moduleName)[0])
  next()
})
export default router
