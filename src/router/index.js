import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../pages/Home.vue";
// @ts-ignore
import Profile from "../pages/Profile.vue";
import { authGuard } from "@bcwdev/auth0-vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/blogs",
    name: "Home",
    component: Home,
  },

  {
    path: '/:id',
    name: "ActiveBlog",
    component: () => import(/* webpackChunkName: "ActiveBlog" */ '../pages/ActiveBlog.vue')
  },
  {
    path: '/:id/comments',
    name: "Comments",
    component: () => import(/* webpackChunkName: "Comments" */ '../components/comments.vue')
  },

  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
