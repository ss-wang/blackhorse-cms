<template>
  <div class="container">
    <div class="news_detail" v-for="(v,i) in newsInfo" :key="i"> 
      <div class="news_title">
        <h4>{{v.title}}</h4>
        <p>
          <span>发表时间:{{v.add_time|dataformat("YYYY年MM月DD HH:mm:ss")}}</span>
          <span class="mui-pull-right">点击次数：{{v.click}}次</span>
        </p>
        <hr>
      </div>
      <div class="news_content" v-html="v.content"></div>
    </div>
  </div>
</template>
<script>
import axios from "axios"
import dataformat from "@/fliters/dataformat"
export default {
  data(){
    return {
      newsInfo:{}
    }
  },
  created(){
    axios({
      url:"http://www.escook.cn:3000/api/getnew/"+ this.$route.params.id
    }).then(res=>{
      if(res.data.status==0){
        this.newsInfo = res.data.message
      }
    })
  },
  filters:{
    dataformat
  }
}
</script>
<style>
  .news_detail{
    padding: 0 5px 0 5px;
  }
  img{
    width: 100%;
  }
</style>