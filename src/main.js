import Vue from 'vue';
// import App from './App.vue';
import VueRouter from 'vue-router';
import './scss/style.scss';

import Home from './views/Home.vue';
import About from './views/About.vue';
import PressCenter from './views/Pressсenter.vue';
import Question from './views/Question.vue';
import Partners from './views/Partners.vue';
import Contacts from './views/Contacts.vue';


Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/press-center', component: PressCenter},
    {path: '/question', component: Question},
    {path: '/partners', component: Partners},
    {path: '/contacts', component: Contacts},
  ]
});

new Vue({
  el: '#app',
  // render: h => h(App),
  data: {
    btnName: 'Продукция',
  },
  router: router,
});

