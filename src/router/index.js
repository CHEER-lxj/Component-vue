import Vue from 'vue'
import Router from 'vue-router'
import mainContent from '@/components/mainContent'
import alert from '@/components/alert/alert'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainContent',
      component: mainContent
    },
    {
      path: '/alert',
      name: 'alert',
      component: alert
    }
  ]
})
