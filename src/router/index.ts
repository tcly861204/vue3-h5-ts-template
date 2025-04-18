import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalized
} from "vue-router"
import NProgress from "@/utils/nprogress"
import routes from "./routes"

const router = createRouter({
  history: createWebHistory(),
  routes
})

interface toRouteType extends RouteLocationNormalized {
  meta: {
    title?: string
  }
}

router.beforeEach((to: toRouteType, _, next) => {
  NProgress.start()
  document.title = to.meta.title as string
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
