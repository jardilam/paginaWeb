import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


import store from '../store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    meta: {requireAuth: true}
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  const rutaProtegida = to.matched.some(record=>record.meta.requireAuth);

  if (rutaProtegida && store.state.token == '') {
    next({name: 'Admin'});
  }
  else{
    next()
  }
})

export default router
