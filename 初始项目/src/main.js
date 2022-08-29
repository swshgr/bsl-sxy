import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import { Button, Select } from 'element-ui';
// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
Vue.prototype.$http = axios;
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
	el: '#app',
	router,
	store,
	render: (h) => h(App)
}).$mount('#app');
