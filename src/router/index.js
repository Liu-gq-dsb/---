import { createMemoryHistory, createRouter } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import layoutView from "../layout/index.vue";

const routes = [
  // { path: "/", component: HomeView },
  { path: "/", component: LoginView },
  { path: "/layout", component: layoutView },
];

const router = createRouter({
  routes,
  history: createMemoryHistory(),
});

export default router;
