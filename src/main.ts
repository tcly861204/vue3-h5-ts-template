import "normalize.css/normalize.css"
import { createApp } from "vue"
import App from "@/App.vue"
import router from "@/router/index"
import store from "@/store/index"
import "@/styles/global.css"
const app = createApp(App)
app.use(router)
app.use(store)
app.mount("#app")
