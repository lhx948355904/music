<template>
	<div id="rankingList">
		<frame></frame>
		<indexNav></indexNav>
		<div id="content">
			<div class="content">
				<div class="left">
					<h4 class="title">云音乐特色榜</h4>
					<div v-for="item in special" :class="item.active?'active':''">
						<a :href="item.href">
							<img :src="item.imgSrc"/>
						</a>
						<div>
							<p><a :href="item.href">{{item.title}}</a></p>
							<p>{{item.tips}}</p>
						</div>
					</div>
					<h4 class="title">全球媒体榜</h4>
					<div v-for="item in globalList" :class="item.active?'active':''">
						<a :href="item.href">
							<img :src="item.imgSrc"/>
						</a>
						<div>
							<p><a :href="item.href">{{item.title}}</a></p>
							<p>{{item.tips}}</p>
						</div>
					</div>
				</div>
				<div class="right">
					<div class="titleInfo">
						<img src="http://p2.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150"/>
						<div class="info">
							<p>云音乐飙升榜</p>
							<p><span class="icon"></span>最新更新：03月11日（每天更新）</p>
							<div>
								<img src="../../../assets/img/playerList.png"/>
							</div>
						</div>
					</div>
					<div class="songList">
						<div class="title">
							<span>歌曲列表</span>
							<span>199首</span>
							<span>播放：<span>3334553345</span>次</span>
						</div>
						<ul>
							<li><img src="../../../assets/img/songListTitle.png"/></li>
							<li></li>
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
				"special":[],
				"globalList":[]
			}
		},
		mounted(){
			this.$http.get("json/rankingList.json").then((resp)=>{
				this.special=resp.data.special;
				this.globalList=resp.data.globalList;
			})
			
			
		}
	}
</script>

<style lang="less" src="./rankingList.less"></style>