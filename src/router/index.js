import Vue from 'vue'
import Router from 'vue-router'


// 引入tabbar中的组件
import Cart from "@/components/tabbar/cart.vue"
import Home from "@/components/tabbar/home.vue"
import Member from "@/components/tabbar/member.vue"
import Search from "@/components/tabbar/search.vue"

// 引入商品有关的组件
import GoodsList from "@/components/goods/list.vue"
import GoodsDetail from "@/components/goods/detail.vue"

// 引入图片相关的组件
import PicDetail from "@/components/pictures/detail.vue"
import PicList from "@/components/pictures/list.vue"

// 引入和新闻相关的组件
import NewsList from "@/components/news/list.vue"
import NewsDetail from "@/components/news/detail.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/home"
    },
    {
     path:"/home",
     component:Home
    },
    {
      path:"/member",
      component:Member
    },
    {
      path:"/cart",
      component:Cart
    },
    {
      path:"/search",
      component:Search
    },
    // 商品的
    {
      path:"/goods",
      component:GoodsList
    },
    {
      path:"/goods/detail",
      component:GoodsDetail
    },
    //新闻
    {
      path:"/news",
      component:NewsList
    },
    {
      path:"/news/detail/:id",
      component:NewsDetail
    },
    // 图片
    {
      path:"/pics",
      component:PicList
    },
    {
      path:"/pics/detail",
      component:PicDetail
    }
  ],
  linkActiveClass:"mui-active"
})
