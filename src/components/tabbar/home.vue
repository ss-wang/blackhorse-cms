
<template>
<div class="page">
  <mt-swipe :auto="1000">
    <mt-swipe-item v-for="(v,i) in pics" :key=i>
      <img :src="v.img" alt="">
    </mt-swipe-item>
  </mt-swipe>
  <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/news">
		                    <img src="../../assets/images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/pics">
		                    <img src="../../assets/images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/goods">
		                    <img src="../../assets/images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <img src="../../assets/images/menu4.png" alt="">
                        <div class="mui-media-body">留言反馈</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <img src="../../assets/images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <img src="../../assets/images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></router-link></li>
  		        </ul> 
		</div>
</div>
  
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      pics: []
    };
  },
  created() {
    axios({
      url: "http://www.escook.cn:3000/api/getlunbo"
    }).then(res => {
      if (res.data.status == 0) {
        this.pics = res.data.message;
      }
    });
  }
};
</script>
 <style scoped>
.mint-swipe {
  width: 100%;
  height: 155px;
}
img {
  width: 100%;
}
.mui-grid-view.mui-grid-9 .mui-media{
  background-color: #fff;
}
</style>

