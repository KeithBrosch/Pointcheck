import Vue from 'vue';
import VueParticles from 'vue-particles';
import VueMoment from 'vue-moment';
import moment from 'moment-timezone';
import App from './App.vue';
import router from './router';

Vue.use(VueMoment, {
  moment,
});


Vue.use(VueParticles);


Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
