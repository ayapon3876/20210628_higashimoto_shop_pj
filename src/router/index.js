import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import LoginTop from '../views/LoginTop.vue'
import DetallSennin from '../views/DetallSennin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/logintop',
    name: 'LoginTop',
    component: LoginTop,
  },
  {
    path: '/detallsennin',
    name: 'DetallSennin',
    component: DetallSennin,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
