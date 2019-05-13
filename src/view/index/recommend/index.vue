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
							        <div class="swiper-slide" v-for="item in newAlbum">
							        	<ul>
							        		<li v-for="item1 in item" class="index">
							        			<div>
							        				<img :src="item1.img"/>
							        				<a :title="item1.name" class="bg coverall" :href="item1.albumHref"></a>
							        				<a class="player" href=""></a>
							        			</div>
							        			<p><a :href="item1.albumHref" :title="item1.albumHref">{{item1.name}}</a></p>
							        			<p><a :href="item1.author" :title="item1.authorHref">{{item1.author}}</a></p>
							        		</li>
							        	</ul>
							        </div>
							    </div>
							    <!-- 如果需要导航按钮 -->
							    <div class="swiper-button-prev index"></div>
							    <div class="swiper-button-next index"></div>
							</div>
						</div>
					</div>
					
					<div class="hot rankingList">
						<div class="title index">
							<span>榜单</span>
							<span>更多<i class="index"></i></span>
						</div>
						<div class="rankingList_value index_bill">
							<ul v-for="(item,index) in rankingList">
								<li v-if="index1==0" v-for="(item1,index1) in item">
									<div>
										<img :src="item1.img"/>
										<a :title="item1.name" :href="item1.href" class="coverall"></a>
									</div>
									<div>
										<a :href="item1.href" :title="item1.name"><h3>{{item1.name}}</h3></a>
										<p>
											<a class="index" href="" title="播放"></a>
											<a class="index" href="" title="收藏"></a>
										</p>
									</div>
								</li>
								<li v-else>
									<span>{{item1.order}}</span>
									<a :href="item1.href" :title="item1.name">{{item1.name}}</a>
									<div>
										<a href="" class="player index" title="播放"></a>
										<a href="" class="addlist icon" title="添加到播放列表"></a>
										<a href="" class="collect index" title="收藏"></a>
									</div>
								</li>
								<li>
									<a href="">查看全部 ></a>
								</li>
							</ul>
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
		<foot></foot>
	</div>
</template>

<script>
	import frame from '../../../components/frame/frame.vue';
	import indexNav from '../../../components/indexNav/indexNav.vue';
	import Album from '../../../components/Album/Album.vue';
	import foot from '../../../components/footer/footer.vue';
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.min.css';
	
	export default{
		components:{
			frame,indexNav,Album,Swiper,foot
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
				"newAlbum":[],
				"rankingList":[],
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
			},
			initSwiper(){
				//swiper
			  	var swiper = new Swiper('.swiper-container', {
					observer:true, //修改swiper自己或子元素时，自动初始化swiper
    				observeParents:true,//修改swiper的父元素时，自动初始化swiper
    				navigation: {
				      	nextEl: '.swiper-button-next',
			      		prevEl: '.swiper-button-prev',
				    },
				    loop:true,
			        autoplay: {
			        	delay: 3000, //3秒切换一次
			        	disableOnInteraction: false
		        	},
				})
			}
		},
		mounted(){
			//日推日期
			var week={ 1:"星期一", 2:"星期二", 3:"星期三", 4:"星期四", 5:"星期五", 6:"星期六", 0:"星期日" };
			
			this.today=new Date().getDate();
			
			this.week=week[new Date().getDay()]
			
			//数据
			this.$http.get("json/recommend.json").then((resp)=>{
				
				console.log(resp.data.banner)
				this.imgSrc=resp.data.banner;
				this.style=resp.data.style;
				this.singer=resp.data.singer;
				this.anchor=resp.data.anchor;
				
			})
			
			this.$http.get("/api/indexData").then((resp)=>{
				console.log(resp);
				this.hot = resp.data.hotSong;
				this.newAlbum=resp.data.newSong;
				this.rankingList=resp.data.songList;
			})
			
			//banner
			this.$nextTick(()=>{
				var imgEach=document.querySelectorAll('.banner-content .each'),bannerWidth=0;
				for(let x of imgEach){
					bannerWidth+=x.clientWidth*1;
				}
				document.querySelector('.banner-content').style.width=bannerWidth+'px';
				
				setTimeout(()=>{
					this.initSwiper();
				},0)
			})
			
			     
		}
	}
</script>

<style lang="less" scoped src="./index.less"></style>
