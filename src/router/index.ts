import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Session from "../views/Session.vue";
import NewSession from "../views/NewSession.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/session",
    name: "Session",
    component: Session
  },
  {
    path: "/newSession",
    name: "NewSession",
    component: NewSession
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
