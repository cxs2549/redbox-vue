import Vue from "vue"
import App from "./App.vue"
import store from "./store"
import "./assets/css/main.css"
import "./assets/css/app.scss"
import * as svgicon from "vue-svgicon"
import SvgIcon from "./assets/icons/SvgIcon.vue"
import SVGSprite from "./assets/icons/SVGSprite"
import Navbar from './components/Navbar/Navbar.vue'
import Hero from './components/Hero/Hero.vue'
import Main from './components/Main/Main.vue'
import Footerbar from './components/Footerbar/Footerbar.vue'
import Socialbar from './components/Socialbar/Socialbar.vue'
import Strap from './components/Navbar/Strap.vue'

Vue.config.productionTip = false

Vue.component("svg-icon", SvgIcon)
Vue.component("svg-sprite", SVGSprite)
Vue.component("navbar", Navbar)
Vue.component("hero", Hero)
Vue.component("mainContent", Main)
Vue.component("footerbar", Footerbar)
Vue.component("socialbar", Socialbar)
Vue.component("strap", Strap)

Vue.use(svgicon, {
    classPrefix: "AppIcon-",
})

new Vue({
    store,
    render: (h) => h(App),
}).$mount("#app")
