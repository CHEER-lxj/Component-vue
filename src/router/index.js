import Vue from 'vue'
import Router from 'vue-router'
import mainContent from '@/components/mainContent'
import alertExample from '@/components/alert/alertExample'

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
      name: 'alertExample',
      component: alertExample
    }
  ]
})
