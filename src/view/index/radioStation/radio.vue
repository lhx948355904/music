<template>
	<div id="radio">
		<frame></frame>
		<indexNav></indexNav>
		<div class="content">
			<div class="cate">
				<div class="swiper-container">
				    <div class="swiper-wrapper">
				        <ul v-for="item in cate" class="swiper-slide">
				        	<li v-for="item1 in item" :data-id="item1.id">
				        		<span :style="item1.img"></span>
				        		<div>{{item1.name}}</div>
				        	</li>
				        </ul>
				    </div>
				    <!-- 如果需要分页器 -->
				    <div class="swiper-pagination"></div>
				    
				    <!-- 如果需要导航按钮 -->
				    <div class="swiper-button-prev"></div>
				    <div class="swiper-button-next"></div>
				    
				</div>
			</div>
		</div>
		<foot></foot>
	</div>
</template>

<script>
	import frame from '../../../components/frame/frame.vue';
	import indexNav from '../../../components/indexNav/indexNav.vue';
	import foot from '../../../components/footer/footer.vue';
	import Swiper from 'swiper';
	
	export default{
		components:{
			frame,indexNav,foot,Swiper
		},
		data(){
			return {
				cate:[]
			}
		},
		methods:{
			
		},
		mounted(){
			var self = this;
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
			})
			
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
		}
	}
</script>

<style lang="less" src='./radio.less'></style>