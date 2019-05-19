import Vue from 'vue';
import App from './App.vue';
import router from './router';
import less from 'less';
import axios from 'axios';
import './assets/iconfont/iconfont.css';
import store from  './status';
import VueLazyLoad from 'vue-lazyload';

Vue.use(VueLazyLoad,{
	loading:'loading.png'
})

Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
	store,
	router,
  render: h => h(App),
}).$mount('#app')
