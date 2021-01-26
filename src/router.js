import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from './views/Dashboard.vue';
import Limits from './views/Limits.vue';
import Users from './views/Users.vue';
import History from './views/History.vue';
import NewRecord from './components/log-book/NewRecord.vue';
import Converters from './views/Converters.vue';
import Sites from './views/Sites.vue';
import Transporters from './views/Transporters.vue';
import Utilizers from './views/Utilizers.vue';
import WastePasport from './views/WastePasport.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/limits',
      name: 'limits',
      component: Limits,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import(/* webpackChunkName: "" */ './views/Profile.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
    },
    {
      path: '/new-user/',
      name: 'NewUser',
      component: () => import('./components/user/NewUser.vue')
    },
    {
      path: '/show-user/',
      name: 'ShowUser',
      component: () => import('./components/user/ShowUser.vue')
    },
    {
      path: '/edit-user/',
      name: 'EditUser',
      component: () => import('./components/user/EditUser.vue')
    },
    {
      path: '/history',
      name: 'history',
      component: History,
    },
    {
      path: '/new-record',
      name: 'new-record',
      component: NewRecord,

    },
    {
      path: '/show-record',
      name: 'show-record',
      component: () => import('./components/log-book/ShowRecord.vue')
    },
    {
      path: '/sites',
      name: 'sites',
      component: Sites
    },
    {
      path: '/new-site',
      name: 'NewSite',
      component: () => import(/* webpackChunkName: "" */ './components/sites/NewSite.vue')
    },
    {
      path: '/show-site',
      name: 'show-site',
      component: () => import(/* webpackChunkName: "" */ './components/sites/ShowSite.vue')
    },
    {
      path: '/edit-site',
      name: 'edit-site',
      component: () => import(/* webpackChunkName: "" */ './components/sites/EditSite.vue')
    },
    {
      path: '/converters',
      name: 'converters',
      component:Converters
    },
    {
      path: '/transporters',
      name: 'transporters',
      component: Transporters,
    },
    {
      path: '/new-transporter/',
      name: 'new-transporter',
      component: () => import('./components/transporter/NewTransporter.vue')
    },
    {
      path: '/show-transporter/',
      name: 'show-transporter',
      component: () => import('./components/transporter/ShowTransporter.vue')
    },
    {
      path: '/edit-transporter/',
      name: 'edit-transporter',
      component: () => import('./components/transporter/EditTransporter.vue')
    },
    {
      path: '/utilizers',
      name: 'utilizers',
      component: Utilizers,
    },
    {
      path: '/new-utilizer',
      name: 'new-utilizer',
      component: () => import('./components/utilizer/NewUtilizer.vue')
    },
    {
      path: '/show-utilizer',
      name: 'show-utilizer',
      component: () => import('./components/utilizer/ShowUtilizer.vue')
    }, 
    {
      path: '/edit-utilizer',
      name: 'edit-utilizer',
      component: () => import('./components/utilizer/EditUtilizer.vue')
    },
    {
      path: '/waste-pasport',
      name: 'waste-pasport',
      component: WastePasport,
    },
     {
      path: '/new-waste',
      name: 'new-waste',
      component: () => import('./components/waste-pasport/NewWastePasport.vue')
    },
     {
      path: '/edit-waste',
      name: 'edit-waste',
      component: () => import('./components/waste-pasport/EditWastePasport.vue')
    },
     {
      path: '/show-waste',
      name: 'show-waste',
      component: () => import('./components/waste-pasport/ShowWastePasport.vue')
    },
    
     {
      path: '*',
      meta: {layout: 'default', auth: false},
      component: () => import('./views/Errors.vue')
    },
  ],
});
