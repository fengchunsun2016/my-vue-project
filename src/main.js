import Vue from 'vue';
import App from './App.vue';
import router from './routers/router';

const FastClick = require('fastclick');
FastClick.attach(document.body);

/*import  { AlertPlugin } from 'vux';
Vue.use(AlertPlugin);*/

Vue.config.productionTip = true

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
