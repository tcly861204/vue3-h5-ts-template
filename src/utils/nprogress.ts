import * as NProgress from "nprogress"
import "nprogress/nprogress.css"

NProgress.configure({
  easing: "ease",
  speed: 500,
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.3,
  parent: "body"
})

export default NProgress
