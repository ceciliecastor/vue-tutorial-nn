import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Jobs from "../views/jobs/Jobs.vue";
import JobDetails from "../views/jobs/JobDetails.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: () => import("../views/jobs/Jobs.vue"),
  },
  {
    path: "/jobs/:id",
    name: "JobDetails",
    component: () => import("../views/jobs/JobDetails.vue"),
    props: true,
  },
  //redirect
  {
    path: "/all-jobs",
    redirect: "/jobs",
  },
  //catch all 404
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
