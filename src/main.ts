import Vue from 'vue'
import router from './router'
import VueToast from 'vue-toast-notification'
import RobinChat from 'robinapp-vue'
import App from './App.vue'
import TitleMixin from './mixins/TitleMixin'
import './registerServiceWorker'
import 'vue-toast-notification/dist/theme-sugar.css'
import 'robinapp-vue/dist/style.css'
import './assets/styles/global.css'

Vue.config.productionTip = false

Vue.use(VueToast)
Vue.use(RobinChat)
Vue.mixin(TitleMixin)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
