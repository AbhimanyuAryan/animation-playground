import Vue from "vue";
import Router from "vue-router";
import Playground from "./views/Playground.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "playground",
      component: Playground
    },
  ]
});
