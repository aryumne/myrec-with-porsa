// Composables
import { createRouter, createWebHistory } from "vue-router";
import useAuthenticationStore from "@/stores/authentication";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    meta: {
      middleware: "guest",
    },
    children: [
      {
        path: "",
        name: "Landing",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Landing.vue"),
        meta: {
          title: "Welcome to MyRec",
        },
      },
      {
        path: "login",
        name: "Login",
        component: () => import("@/views/Login.vue"),
        meta: {
          meta: "Login to MyRec",
        },
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/default/View.vue"),
    meta: {
      middleware: "auth",
    },
    children: [
      {
        path: "myrec",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
        meta: {
          title: "MyRec",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthenticationStore();

  document.title = to.meta.title;
  if (to.meta.middleware == "guest") {
    if (authStore.authenticated === true) {
      next({ name: "Home", replace: true });

      return;
    }
    next();
  } else {
    if (!authStore.authenticated) {
      next({ name: "Landing", replace: true });

      return;
    }
    next();
  }
});

export default router;
