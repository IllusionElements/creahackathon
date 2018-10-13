import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PageTwo from "@/components/page2"
import MapDisplay from "@/components/MapDisplay"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: "Page1"
      }
    },
    {
      path: '/page1',
      name: 'Page1',
      component: HelloWorld
    },
    {
      path: '/page2',
      name: 'Page2',
      component: PageTwo
    },
    {
      path: '/map',
      name: 'Map',
      component: MapDisplay
    }
  ]
})
