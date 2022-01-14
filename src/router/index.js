import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

import HelloWorldA from '@/views/hello-world/HelloWorldA'
import HelloWorldB from "@/views/hello-world/HelloWorldB";
import app1 from "@/views/app-example/data";
import app2 from "@/views/app-example/v-bind";
import app3 from "@/views/app-example/v-if";
import app4 from "@/views/app-example/v-for1";
import app5 from "@/views/app-example/v-on";
import app6 from "@/views/app-example/v-model";
import app7 from "@/views/app-example/v-for2";
import app8 from "@/views/app-example/v-text";

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: {title: 'Dashboard', icon: 'dashboard', affix: true}
      }
    ]
  },
  {
    path: '/hello',
    component: Layout,
    redirect: '/hello',
    meta: {
      title: 'hello',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: '/a',
        component: HelloWorldA,
        meta: {
          title: 'HelloWorldA',
        }
      },
      {
        path: '/b',
        component: HelloWorldB,
        meta: {
          title: 'HelloWorldB',
        }
      },
    ]
  },
  {
    path: '/app',
    component: Layout,
    redirect: '/app',
    meta: {
      title: 'app',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'data',
        component: app1,
        meta: {
          title: 'data',
        }
      },
      {
        path: '/v-bind',
        component: app2,
        meta: {
          title: 'v-bind',
        }
      },
      {
        path: '/v-if',
        component: app3,
        meta: {
          title: 'v-if',
        }
      },
      {
        path: '/v-for1',
        component: app4,
        meta: {
          title: 'v-for1',
        }
      },
      {
        path: '/v-on',
        component: app5,
        meta: {
          title: 'v-on',
        }
      },
      {
        path: '/v-model',
        component: app6,
        meta: {
          title: 'v-model',
        }
      },
      {
        path: '/v-for2',
        component: app7,
        meta: {
          title: 'v-for2',
        }
      },
      {
        path: '/v-text',
        component: app8,
        meta: {
          title: 'v-text',
        }
      },
    ]
  },


]

export const asyncRoutes = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'Permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'Page Permission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: 'Role Permission',
          roles: ['admin']
        }
      }
    ]
  },


  /** when your routing map is too long, you can split it into small modules **/



  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'Error Pages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401'),
        name: 'Page401',
        meta: {title: '401', noCache: true}
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'Page404',
        meta: {title: '404', noCache: true}
      }
    ]
  },

  {
    path: '/error-log',
    component: Layout,
    children: [
      {
        path: 'log',
        component: () => import('@/views/error-log/index'),
        name: 'ErrorLog',
        meta: {title: 'Error Log', icon: 'bug'}
      }
    ]
  },

  // 404 page must be placed at the end !!!
  {path: '*', redirect: '/404', hidden: true}
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({y: 0}),
  routes: constantRoutes
})

const router = createRouter()


export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
