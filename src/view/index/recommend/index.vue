<template>
	<div id="index">
		<frame></frame>
		<indexNav></indexNav>
		<div id="banner" :style="{'background':imgSrc[0][1]}">
			<div class="content">
				<div class='banner'>
					<div class="banner-content">
						<div class="each" v-for="(item,index) in imgSrc" :data-bgcolor="item[1]" :class="[index==0?'active':'']">
							<img :src="item[0]"/>
						</div>
					</div>
					<span @click="bannerClick" class="left banner"></span>
					<span @click="bannerClick" class="right banner"></span>
					<ul class="banner_nav">
						<li></li>
					</ul>
				</div>
				
				
				<div class="download download_">
					<a href="" class="download_ click_download"></a>
					<p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
				</div>
			</div>
		</div>
		<div id="content">
			<div class="content">
				<div class="left">
					<div class="hot">
						<div class="title index">
							<span>热门推荐</span>
							<ul>
								<li><a href="">华语</a></li>
								<li><a href="">流行</a></li>
								<li><a href="">摇滚</a></li>
								<li><a href="">民谣</a></li>
								<li><a href="">电子</a></li>
							</ul>
							<span>更多<i class="index"></i></span>
						</div>
						<div class="Album">
							<album  v-for="item in hot" :data = "item"></album>
						</div>
					</div>
					
					<div class="hot style">
						<div class="title index">
							<span>个性化推荐</span>
							<span>更多<i class="index"></i></span>
						</div>
						
						<div class="Album">
							<div class="album datealbum">
								<a class="date" href="" title="每日歌曲推荐">
									<span class="week">{{week}}</span>
									<span class="todayDate">{{today}}</span>
									<span class="date datebg"></span>
								</a>
								<p> <a href=""> 每日歌曲推荐 </a> </p>
								<p> 根据你的口味生成， 每天6:00更新 </p>
							</div>
							<album  v-for="item in style" :data = "item"></album>
						</div>
					</div>
					
					<div class="hot newAlbum">
						<div class="title index">
							<span>新碟上架</span>
							<span>更多<i class="index"></i></span>
						</div>
						<div class="Album">
							<div class="swiper-container">
							    <div class="swiper-wrapper">
							        <div class="swiper-slide">Slide 1</div>
							        <div class="swiper-slide">Slide 2</div>
							        <div class="swiper-slide">Slide 3</div>
							    </div>
							    <!-- 如果需要分页器 -->
							    <div class="swiper-pagination"></div>
							    
							    <!-- 如果需要导航按钮 -->
							    <div class="swiper-button-prev"></div>
							    <div class="swiper-button-next"></div>
							    
							    <!-- 如果需要滚动条 -->
							    <div class="swiper-scrollbar"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="right">
					<div class="userinfo index">
						<div>
							<a href=""><img src="http://p1.music.126.net/s42rBAeUx8q04admqHY9FA==/109951163524392658.jpg?param=80y80"/></a>
							<div>
								<p class="name"><a href="">乔治_x</a></p>
								<p class="level icon2">
									<a href="">
										8
										<i class="icon2"></i>
									</a>
								</p>
								<p class="status"><a href="" class="button2"><i class="button2">已签到</i></a></p>
							</div>
						</div>
						<ul>
							<li>
								<a href="">
									<div>0</div>
									<div>动态</div>
								</a>
							</li>
							<li>
								<a href="">
									<div>2</div>
									<div>关注</div>
								</a>
							</li>
							<li>
								<a href="">
									<div>4</div>
									<div>粉丝</div>
								</a>
							</li>
						</ul>
					</div>
					
					<div class="singer">
						<div class="title">
							<h4>入驻歌手</h4>
							<a href="">查看全部 ></a>
						</div>
						<ul>
							<li v-for="item in singer">
								<a href="">
									<div>
										<img :src="item.imgSrc"/>
									</div>
									<div>
										<h4>{{item.name}}</h4>
										<p>{{item.introduce}}</p>
									</div>
								</a>
							</li>
						</ul>
						<a href="">申请成为网易音乐人</a>
					</div>
					
					<div class="anchor">
						<div class="title"><h4>热门主播</h4></div>
						<ul>
							<li v-for="item in anchor">
								<a href=""><img :src="item.imgSrc"/></a>
								<div>
									<p><a href="">{{item.name}}</a><span class="icon"></span></p>
									<p>{{item.introduce}}</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import frame from '../../../components/frame/frame.vue';
	import indexNav from '../../../components/indexNav/indexNav.vue';
	import Album from '../../../components/Album/Album.vue';
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.min.css';
	
	export default{
		components:{
			frame,indexNav,Album,Swiper
		},
		data(){
			return {
				"imgSrc":[[],[],[],[]],
				"tableIndex":0,
				"hot":[],
				"style":[],
				"singer":[],
				"anchor":[],
				"today":"",
				"week":"",
			}
		},
		methods:{
			bannerClick(e){
				var bannerIndex=document.querySelectorAll('.banner-content .each').length,bannerEach=document.querySelectorAll('.banner-content .each');
				if(e.target.className.includes('left')){
					if(this.tableIndex--<=0){
						this.tableIndex=0;
					}
				}else{
					if(this.tableIndex++>=bannerIndex-1){
						this.tableIndex=this.tableIndex-1;
					}
				}
				for(let x of bannerEach){x.classList.remove('active')};
				bannerEach[this.tableIndex].classList.add('active');
				for(let x of bannerEach){
					if(x.className.includes('active')){
						x.style.display='inline-block';
						x.style.visibility='visible';
						document.querySelector('#banner').style.background=x.getAttribute('data-bgcolor')
					}else{
						x.style.display='none';
						x.style.visibility='hidden';
					}
				}
			}
		},
		mounted(){
			//日推日期
			var week={ 1:"星期一", 2:"星期二", 3:"星期三", 4:"星期四", 5:"星期五", 6:"星期六", 0:"星期日" };
			
			this.today=new Date().getDate();
			
			this.week=week[new Date().getDay()]
			
			//数据
			this.$http.get("json/recommend.json").then((resp)=>{
				this.imgSrc=resp.data.banner;
				this.hot=resp.data.hot;
				this.style=resp.data.style;
				this.singer=resp.data.singer;
				this.anchor=resp.data.anchor;
			})
			
			//banner
			this.$nextTick(()=>{
				var imgEach=document.querySelectorAll('.banner-content .each'),bannerWidth=0;
				for(let x of imgEach){
					bannerWidth+=x.clientWidth*1;
				}
				document.querySelector('.banner-content').style.width=bannerWidth+'px';
			})
			
			//swiper
			  var mySwiper = new Swiper ('.swiper-container', {
			    direction: 'vertical',
			    loop: true,
			    
			    // 如果需要分页器
			    pagination: '.swiper-pagination',
			    
			    // 如果需要前进后退按钮
			    nextButton: '.swiper-button-next',
			    prevButton: '.swiper-button-prev',
			    
			    // 如果需要滚动条
			    scrollbar: '.swiper-scrollbar',
			  })     
		}
	}
</script>

<style lang="less" src="./index.less"></style>
