import Vue from 'vue';
import App from './App.vue';
import router from './router';
import less from 'less';
import axios from 'axios';
Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
