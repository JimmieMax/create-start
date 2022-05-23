import { createRouter, createWebHashHistory } from 'vue-router'
const files = import.meta.globEager('./modules/*')
let routes: Array<any> = []

for (const key in files) {
  routes = routes.concat(files[key].default)
}
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
