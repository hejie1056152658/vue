<template>
    <div class="tmpl">
     <!-- 组件的头 -->
     <nav-bar title="新闻列表"></nav-bar>
     <!-- mui中的图文列表 -->
       <ul class="mui-table-view">
				<li v-for="news in newsList" :key="news.id" class="mui-table-view-cell mui-media">
					<router-link :to="{name:'news.detail',query:{newsId:news.id}}">
						<img class="mui-media-object mui-pull-left" :src="news.img_url">
						<div class="mui-media-body">
							<span>{{news.title}}</span>
                         <div class="news-desc">
                            <p>点击数:{{news.click}}</p>
                            <p>发表时间:{{news.add_time | convertDate}}</p>
                        </div>
                        </div>
					</router-link :to="{name:'news.detail',query:{newsId:news.id}}">
				</li>
			</ul>
    </div>
</template>


<script>
    export default {
        data(){
            return {
               newsList:[],
            }
        },created(){
          
           this.$ajax.get('getnewslist')
           .then(res=>{
                this.newsList=res.data.message;//返回数组
           })
           .catch(err=>{
            console.log('新闻列表获取失败',err);
           })
        }
    }
</script>


<style>
.news-desc p{
        color: #0bb0f5;
}
.news-desc p:nth-child(1){
    float:left;
  font-size:13px;
}
.news-desc p:nth-child(2){
    float:right;
    font-size:13px;
}


.tmpl{
    margin-bottom:50px;
}
</style>