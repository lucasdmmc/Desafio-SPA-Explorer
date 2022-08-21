import { Router } from './router.js'

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/pages/universe", "/pages/universe.html")
router.add("/pages/exploration", "/pages/exploration.html")


router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()