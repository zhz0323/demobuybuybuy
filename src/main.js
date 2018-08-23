import Vue from 'vue'
//引入根组件
import App from './App.vue'
//引入ui插
import ElementUI from 'element-ui';
//引入ui插件的样式
import 'element-ui/lib/theme-chalk/index.css';
//引入vue_router
import vueRouter from "vue-router";
//导入懒加载组件
import VueLazyload from "vue-lazyload";
//引入首页的组件
import Index from "./components/01,index.vue"
//使用路由的中间件
Vue.use(vueRouter)
//使用elementUi中间件
Vue.use(ElementUI);
//使用懒加载中间件
Vue.use(VueLazyload, {
  loading: require('./assets/lib/images/dog.png'),
})
Vue.config.productionTip = false

//定义路由
const routes=[
  {
    path:'/',
    redirect:'/index'
  },
  {
    path:'/index',
    component:Index
  }
]
//创建实例
const router =new vueRouter({
  routes
})

//挂载根实例
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
