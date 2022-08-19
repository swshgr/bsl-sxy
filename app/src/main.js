import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios  from "axios";
Vue.prototype.axios=axios;
Vue.config.productionTip = false
// Vue.http.headers.common['token'] = 'Accept-Language';
axios.defaults.baseURL='https://api.imooc-admin.lgdsunday.club/api';
axios.interceptors.request.use(function(config){
  console.log(config);
  config.headers.Authorization=sessionStorage.getItem('token')
  return config
},function(error){
  return Promise.reject(error)
})
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
