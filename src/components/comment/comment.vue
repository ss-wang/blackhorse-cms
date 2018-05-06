<template>
  <div>
    <h4>发表评论</h4>
    <hr>
    <textarea name="" id="" cols="30" rows="3" v-model="content"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(v,i) in commentList" :key="i">
					<a href="javascript:;">
            <p class="comment-title">
              <span>第{{i+1}}楼</span>
              <span>发表时间:{{v.add_time|dataformat("YYYY-MM-DD HH:mm:ss")}}</span>
              <span class="mui-pull-right">{{v.user_name}}</span>
            </p>
						<img class="mui-media-object mui-pull-right" src="../../assets/images/menu1.png">
						<div class="mui-media-body">
							<p class="mui-ellipsis">{{v.content}}</p>
						</div>
					</a>
				</li>
			</ul>
      <mt-button v-show="showMoreBtn" class="more" type="danger" :plain="true" size="large" @click="btnClick">加载更多</mt-button>
  </div>
</template>
<script>
// 因为评论组件会在各个模块中服用
// 使用该组件的时候必须告诉组件当前评论的是谁
// 通过父组件向子组件传值的方式,将正在评论的内容的id传到评论组件内
  import axios from "axios"
  import dataformat from "@/fliters/dataformat"
  import { Toast } from 'mint-ui';
export default {
  props:["id"],
  data(){
    return {
      commentList:[],
      currentpage:1,
      showMoreBtn:true,
      content:""
    }
  },
  created(){
    // 将评论列表渲染出来
  this.getData()
  },
  methods:{
    // 封装渲染数据
    getData(){
    axios({
    url:"http://www.escook.cn:3000/api/getcomments/"+this.id+"?pageindex="+this.currentpage
    }).then(res=>{
    if(res.data.status==0){
      // this.commentList.push(... res.data.message);
      this.commentList = this.commentList.concat(res.data.message);
      // 当数据加载完成之后(用户连续点击之后，会重复发送请求，增加服务器负担)，隐藏数据，提示用户没有更多数据了
        if(res.data.message.length==0){
          this.showMoreBtn = false;
          Toast("没有更多数据了...")
        }
    }
    })
    },
    postComment(){
      // 获取输入框内的信息
      if(this.content.trim()){
         axios({
           url:"http://www.escook.cn:3000/api/postcomment/"+this.id,
           method:"post",
           data:"content"+this.content,
         }).then(res=>{
           if(res.data.status==0){
             this.commentList.unshift({
                add_time:new Date(),
                content:this.content,
                user_name:"匿名用户"
             })
             this.content="";
           }
         })

      }
    },
    btnClick(){
      this.currentpage++;
      this.getData();
    }
  },
  filters:{
    dataformat
  }
}
</script>
<style scoped>
textarea{
  margin-top: 10px;
  margin-bottom: 0px;
}
.more{
margin-bottom: 10px;
}
</style>

