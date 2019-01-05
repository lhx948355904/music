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
									<span class="week">星期六</span>
									<span class="todayDate">5</span>
									<span class="date datebg"></span>
								</a>
								<p>
									<a href="">
										每日歌曲推荐
									</a>
								</p>
								<p>
									根据你的口味生成，
									每天6:00更新
								</p>
							</div>
							<album  v-for="item in style" :data = "item"></album>
						</div>
					</div>
				</div>
				<div class="right">
					<div class="userinfo">
						
					</div>
					<div class="singer">
						
					</div>
					<div class="anchor">
						
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
	
	export default{
		components:{
			frame,indexNav,Album
		},
		data(){
			return {
				imgSrc:[[],[],[],[]],
				tableIndex:0,
				hot:[
					{
						imgSrc:"http://p1.music.126.net/cFWSq4qtrOlnifdVPtm1WA==/109951163554567321.jpg?param=140y140",
						time:"65万",
						title:"我不确定，记忆的橡皮擦要多久才能把你抹去",
						radio:false
					},{
						imgSrc:"http://p1.music.126.net/L8wbwZIocX8s6PokIy-TUA==/109951163760138152.jpg?param=140y140",
						time:"32万",
						title:"谁说失恋情歌都是苦情的，哼",
						radio:false
					},{
						imgSrc:"http://p1.music.126.net/G7GgOHBdH1rUIIW3hot6Kw==/109951163609743240.jpg?param=140y140",
						time:"3091万",
						title:"那些喜欢到循环播放的歌",
						radio:false
					},{
						imgSrc:"http://p2.music.126.net/CcbZcmLweTZUOFikPHTN8Q==/109951163762152114.jpg?param=140y140",
						time:"23万",
						title:"LOVER BOY 88（Feat可乐）",
						radio:true
					},{
						imgSrc:"http://p1.music.126.net/6Dnpnv9pi30ix2LuoNU1IQ==/109951163755515426.jpg?param=140y140",
						time:"2585万",
						title:"2018年度最热新歌TOP100",
						radio:false
					},{
						imgSrc:"http://p2.music.126.net/IiTj9LWHn_SQlv4FGtqG5w==/109951163766722012.jpg?param=140y140",
						time:"1729",
						title:"我很快就30岁了",
						radio:true
					},{
						imgSrc:"http://p1.music.126.net/AqUHA2qnFUlyHw3iHdEY8Q==/109951163515900261.jpg?param=140y140",
						time:"1946万",
						title:"『睡眠丧歌』希望低落会让你快乐",
						radio:false
					},{
						imgSrc:"http://p2.music.126.net/PDs7zTmMFdVhhSrFNO-uUQ==/109951163618744053.jpg?param=140y140",
						time:"18684",
						title:"足够",
						radio:true
					}
				],
				style:[
					{
						imgSrc:"https://p1.music.126.net/iQdBR7LiiMXmAKSSWse-KA==/109951162956237599.jpg?param=140y140",
						time:"4575.2万",
						title:"适合视频剪辑BGM的音乐",
						title1:"根据你收藏的单曲《Bloom of Youth》推荐",
						radio:false
					},{
						imgSrc:"https://p1.music.126.net/Y3rXiAWKw75VUjvMBQsxUA==/1424967077460786.jpg?param=140y140",
						time:"9792.6",
						title:"前奏直接秒杀的纯音乐",
						title1:"根据你收藏的单曲《Bloom of Youth》推荐",
						radio:false
					},{
						imgSrc:"https://p1.music.126.net/GjTTKFk1rigObl-CgTBbIQ==/109951163659334752.jpg?param=140y140",
						time:"1848.2万",
						title:"写作业必备(学霸刷题)中文安静",
						title1:"根据你喜欢的歌单《听说你也在找好听的华语歌》推荐",
						radio:false
					}
				]
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
			this.$http.get("json/recommend.json").then((resp)=>{
				this.imgSrc=resp.data.banner;
			})
			
			this.$nextTick(()=>{
				var imgEach=document.querySelectorAll('.banner-content .each'),bannerWidth=0;
				for(let x of imgEach){
					bannerWidth+=x.clientWidth*1;
				}
				document.querySelector('.banner-content').style.width=bannerWidth+'px';
			})
		}
	}
</script>

<style lang="less" src="./index.less"></style>
