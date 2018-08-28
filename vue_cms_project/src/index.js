import Vue from 'vue';
import router from './router'
import App from './App.vue'

// mintui
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../static/mui/css/mui.min.css'

Vue.use(Mint)

// iconfont
import '../static/iconfont/iconfont.css'

// glabal css
import '../static/css/site.css'

// axios
import Axios from 'axios'
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = 'http://localhost:3000/api/'

// interceptors
Axios.interceptors.request.use(function (config) {
  // ...
  return config
})

// Moment
import Moment from 'moment'

// global filter
Vue.filter('convertDate', function(value) {
  return Moment(value).format('YYYY-MM-DD')
})

import NavBar from '@/components/common/NavBar.vue'

Vue.component('navBar', NavBar)

// mock
import './mock'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  render: c => c(App)
});
