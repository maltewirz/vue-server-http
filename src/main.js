import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'
import url from '../secret.js';


Vue.use(VueResource);

Vue.http.options.root = url.url;
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method == 'POST') {
    request.method = 'PUT';
  }
  next(response => {
    response.json = () => { return {messages: response.body }} // transform response to object
  });
  
});

new Vue({
  el: '#app',
  render: h => h(App)
})
