<template>
	<div id="radio">
		<frame></frame>
		<indexNav></indexNav>
		<div class="radioContent">
			<div class="cate">
				<div class="swiper-container">
				    <div class="swiper-wrapper">
				        <ul v-for="item,index in cate" class="swiper-slide">
				        	<li v-for="item1,index1 in item" :class="{active:item1.active==true}" :data-id="item1.id" @click="getCateData(item1.id,index,index1)" >
				        		<span :style="item1.img"></span>
				        		<div>{{item1.name}}</div>
				        	</li>
				        </ul>
				    </div>
				    <!-- 如果需要导航按钮 -->
				    <div class="swiper-button-prev"></div>
				    <div class="swiper-button-next"></div>
				</div>
			</div>
			
			<div class="newRadio">
				<div>优秀新电台</div>
				<ul>
					<li v-for="item in newRadio">
						<a :href="item.href"><img :src="item.img" :title="item.title1" /></a>
						<p><a :href="item.href">{{item.title1}}</a></p>
						<p>{{item.title2}}</p>
					</li>
				</ul>
			</div>
			
			<div class="radioList">
				<div>电台排行榜</div>
				<ul>
					<li v-for="item in dataList">
						<a :href="item.href"><img :src="item.img" :title="item.title" /></a>
						<div>
							<h3><a :href="item.href" :title="item.title">{{item.title}}</a></h3>
							<p><i class="iconfont icon-wo"></i><a :href="item.authorHref" :title="item.author">{{item.author}}</a></p>
							<p>{{item.title2}}</p>
						</div>
					</li>
				</ul>
			</div>
			<page v-if='pageBool' @pageSize='showPage' :allCount="allPage"></page>
		</div>
		<foot></foot>
	</div>
</template>

<script>
	import frame from '@/components/frame/frame.vue';
	import indexNav from '@/components/indexNav/indexNav.vue';
	import foot from '@/components/footer/footer.vue';
	import page from '@/components/page/page.vue';
	import Swiper from 'swiper';
	
	export default{
		components:{
			frame,indexNav,foot,Swiper,page
		},
		data(){
			return {
				cate:[],
				newRadio:[],
				dataList:[],
				nowRadio:0,
				allPage:'',
				cateId:2001,
				pageBool:true,
			}
		},
		methods:{
			//数据方法
			getData(id,size){
				size = size-1 || 0;
				this.$http.get(`/api/radioData/${id}/${size}`).then((resp)=>{
					this.newRadio = resp.data.newRadio;
					this.dataList = resp.data.dataList;
					this.allPage = resp.data.pageCount*1;
				})
			},
			//分类点击
			getCateData(id,index,index1){
				for(let x of this.cate){
					for(let x1 of x){
						x1.active = false;
					}
				}
				this.cate[index][index1].active = true;
				this.cateId = id;
				this.pageBool = false;
				this.getData(this.cateId,1);
				this.$nextTick(()=>{
					this.pageBool = true;
				})
			},
			//分页回调
			showPage(index){
				this.getData(this.cateId,index)
			}
		},
		mounted(){
			var self = this;
			//电台分类
			this.$http.get('/api/radioCate').then((resp)=>{
				let i = -1;
				for(let x in resp.data.data){
					if(x%18 == 0){
						self.cate.push([]);
						i++;
					}
					if(x < resp.data.data.length-2){
						self.cate[i].push(resp.data.data[x])
					}
				}
				self.cate[0][0].active = true;
			})
			
			//swiper
			this.$nextTick(()=>{
				var swiper = new Swiper('.swiper-container', {
					observer:true, //修改swiper自己或子元素时，自动初始化swiper
    				observeParents:true,//修改swiper的父元素时，自动初始化swiper
    				navigation: {
				      	nextEl: '.swiper-button-next',
			      		prevEl: '.swiper-button-prev',
				    },
				})
			})
			
			//首次加载
			this.getData(this.cateId,1);
		}
	}
</script>

<style lang="less" src='./radio.less'></style>