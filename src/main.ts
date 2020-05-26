import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vueAplayer from 'vue-aplayer';

Vue.use(ElementUI);
Vue.use(vueAplayer);
Vue.config.productionTip = false

new Vue({
  data() {
    return {value:''}
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
