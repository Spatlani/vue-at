import Vue from 'vue'
import App from './App.vue'

Vue.directive('maskInput', {
  componentUpdated: function (el, el2, el3) {
    // console.log(el3);
    // const matches = el.innerHTML.match(/@[\s\w]+:[0-9a-z-]+/gi);
    // console.log(matches);
    // el.style.backgroundColor = 'red';
  },
})

new Vue({
  el: '#app',
  render: h => h(App)
})
