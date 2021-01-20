import Vue from 'vue';
import Router from 'vue-router';

import PersonalBlog from './views/PersonalBlog.vue';
import Errors from './views/Errors.vue';
import Users from './views/Users.vue';
import ShowUser from "./components/user/ShowUser.vue";
import EditUser from "./components/user/EditUser.vue";
import NewUser from "./components/user/NewUser.vue";
import Sites from './views/Sites.vue';
import History from './views/History.vue';
import NewRecord from './components/log-book/NewRecord.vue';
import Utilizers from './views/Utilizers.vue';
import ShowUtilizer from './components/utilizer/ShowUtilizer.vue';
import NewUtilizer from './components/utilizer/NewUtilizer.vue';
import EditUtilizer from './components/utilizer/EditUtilizer.vue';


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
      redirect: '/system-overview',
    },
    {
      path: '/system-overview',
      name: 'system-overview',
      component: PersonalBlog,
    },
    {
      path: '/add-new-record',
      name: 'add-new-record',
      component: NewRecord,

    },
    {
      path: '/errors',
      name: 'errors',
      component: Errors,
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
    },
    {
      path: '/show-user/:id',
      name: 'ShowUser',
      component: ShowUser,
    },
    {
      path: '/new-user',
      name: 'NewUser',
      component: NewUser,
    },
    {
      path: '/edit-user/:id',
      name: 'EditUser',
      component: EditUser,
    },
    {
      path: '/sites',
      name: 'Sites',
      component: Sites
    },
    {
      path: '/new-site',
      name: 'NewSite',
      component: () => import(/* webpackChunkName: "" */ './components/sites/NewSite.vue')
    },
    {
      path: '/edit-site',
      name: 'EditSite',
      component: () => import(/* webpackChunkName: "" */ './components/sites/EditSite.vue')
    },
    {
      path: '/show-site',
      name: 'ShowSite',
      component: () => import(/* webpackChunkName: "" */ './components/sites/ShowSite.vue')
    },
    {
      path: '/utilizers',
      name: 'utilizers',
      component: Utilizers,
    },
    {
      path: '/show-utilizer',
      name: 'show-utilizer',
      component: ShowUtilizer,
    },
    {
      path: '/new-utilizer',
      name: 'new-utilizer',
      component: NewUtilizer,
    },
    {
      path: '/edit-utilizer',
      name: 'edit-utilizer',
      component: EditUtilizer,
    },
    {
      path: '/history',
      name: 'history',
      component: History,
    }, {
      path: '*',
      redirect: '/errors',
    },
  ],
});
