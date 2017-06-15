import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* tslint:disable:no-unused-expression */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
});
