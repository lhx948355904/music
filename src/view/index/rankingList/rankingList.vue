<template>
	<div id="rankingList">
		<frame></frame>
		<indexNav></indexNav>
		<div id="content">
			<div class="content">
				<div class="left">
					<h4 class="title">云音乐特色榜</h4>
					<div @click="getSong(item.id)" v-for="item in special" :title="item.name">
						<img :src="item.imgSrc"/>
						<div>
							<p>{{item.name}}</p>
							<p>{{item.status}}</p>
						</div>
					</div>
					<h4 class="title">全球媒体榜</h4>
					<div v-for="item in globalList" @click="getSong(item.id)" :title="item.name">
						<img :src="item.imgSrc"/>
						<div>
							<p>{{item.name}}</p>
							<p>{{item.status}}</p>
						</div>
					</div>
				</div>
				<div class="right">
					<div class="titleInfo">
						<img :src="imgSrc"/>
						<div class="info">
							<p>{{name}}</p>
							<p><span class="icon"></span>{{status}}{{status1}}</p>
							<div>
								<span>
									<span><i class="iconfont icon-bofang"></i>播放</span>
									<i class="iconfont icon-tianjia"></i>
								</span>
								<span>
									<i class="iconfont icon-shoucang"></i>
									{{fav}}
								</span>
								<span>
									<i class="iconfont icon-zhuanfa"></i>
									{{share}}
								</span>
								<span>
									<i class="iconfont icon-xiazai"></i>
									下载
								</span>
								<span>
									<i class="iconfont icon-pinglun"></i>
									{{comment}}
								</span>
								<!--<img src="../../../assets/img/playerList.png"/>-->
							</div>
						</div>
					</div>
					<div class="songList">
						<div class="title">
							<span>歌曲列表</span>
							<span>{{songCount}}首歌</span>
							<span>播放：<span>{{playCount}}</span>次</span>
						</div>
						<ul>
							<li>
								<span></span>
								<span>标题</span>
								<span>时长</span>
								<span>歌手</span>
							</li>
							<li v-for="x,i in data">
								<span>
									<span>{{i+1}}</span>
									<span v-if="x.lastRank!=undefined">
										<i v-if="i-x.lastRank>0" class="iconfont icon-xiangxiajiantou green">{{i-x.lastRank | upvalue}}</i>
										<i v-else-if="i-x.lastRank<0" class="iconfont icon-xiangshangjiantou red">{{i-x.lastRank | upvalue}}</i>
										<i v-else class="iconfont icon-subtract gray">{{i-x.lastRank | upvalue}}</i>
									</span>
									<span v-else class="iconfont icon-new green"></span>
								</span>
								<span class="textHide">
									<span v-if="i<3"><img :src="x.album.picUrl"/></span>
									<a href="" class="iconfont icon-bofang"></a>
									<span>
										<a :title="x.name" target="_blank" :href="'https://music.163.com/#/song?id='+x.id">{{x.name}}</a>
										<span v-if="x.alias.length>0" :title="title2" v-for="title2 in x.alias">
											({{title2}})
										</span>
									</span>
								</span>
								<span>
									{{x.duration | songTime}}
								</span>
								<span class="textHide">
									<a :href="'https://music.163.com/#/artist?id='+author.id" v-for="author in x.artists">
										{{author.name}}
									</a>
								</span>
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
	import foot from '../../../components/footer/footer.vue';
	export default{
		components:{
			frame,indexNav,foot
		},
		data(){
			return {
				special:[],
				globalList:[],
				name:'',
				status:'',
				status1:'',
				fav:'',
				share:'',
				comment:'',
				playCount:'',
				songCount:'',
				imgSrc:'',
				data:	[],
			}
		},
		filters:{
			upvalue:(value)=>{
				if(value > 0){
					return value
				}else{
					return value*-1
				}
			},
			songTime:(time)=>{
				var minute = Math.floor(time/1000/60);
				var second = Math.floor(time/1000 - minute*60)
				return minute + ":" + (second < 10 ? "0" + second : second) ;
			}
		},
		methods:{
			getSong(id){
				this.$http.get(`/api/rankingCate/${id}`).then((resp)=>{
					var data = resp.data;
					this.name = data.name;
					this.status = data.status;
					this.status1 = data.status1;
					this.fav = data.fav;
					this.share = data.share;
					this.comment = data.comment;
					this.playCount = data.playCount;
					this.imgSrc = data.imgSrc;
					this.songCount = data.songCount;
					this.data = JSON.parse(data.data);
					
					console.log(this.data);
				})
			}
		},
		mounted(){
			this.$http.get('/api/rankingCata').then((resp)=>{
				this.special=resp.data.special;
				this.globalList=resp.data.allWorld;
			})
			
			this.getSong(19723756);
		}
	}
</script>

<style lang="less" src="./rankingList.less"></style>