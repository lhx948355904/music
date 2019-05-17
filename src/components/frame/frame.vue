<template>
	<div id="frame">
		<div class="header">
			<div class="logo header_picture">
				<a href="/"></a>
			</div>
			<nav>
				<a href="/">发现音乐</a>
				<a>我的音乐</a>
				<a>朋友</a>
				<a>商城</a>
				<a>音乐人</a>
				<a>下载客户端<span class="hot header_picture"></span></a>
			</nav> 
			<div class="search header_picture">
				<input type="text" placeholder="音乐/视频/电台/用户" />
			</div>
			<a class="contribute header_picture">视频投稿</a>
			<div class="my header_picture">
				<img src="../../assets/img/myPhone.jpg" alt="" />
			</div>
		</div>
		<div class="footer" :class="{'lock_footer':lock_icon1}" @mouseenter="footershow" @mouseleave="footerleave">
			<div class="bg footer_picture"></div>
			<div class="footer_cont">
				<div class="player">
					<a class="pre" href=""></a>
					<a class="pause" href=""></a>
					<a class="next" href=""></a>
				</div>
				<div class="player_info">
					<div class="picture footer_picture">
						<img :src="resp==''?'http://s4.music.126.net/style/web2/img/default/default_album.jpg':resp.album.picUrl" alt="" />
					</div>
					<div class="progress">
						<div class="title">
							<span class="name">{{resp.name||''}}</span>
							<span class="author">
								<template v-if='resp' v-for="item in resp.artists">
									{{item.name}}
								</template>
								<template v-else></template>
							</span>
							<span class="from footer_picture"></span>
						</div>
						<div class="_progress footer_picture">
							<div><span class="btn"></span></div>
							<span class="time">
								<template v-if="resp==''">00:00</template>
								<template v-else>{{0 | addTime | songTime}}</template>
								/
								<template v-if="resp==''">00:00</template>
								<template v-else>{{resp.duration | songTime}}</template>
							</span>
						</div>
						
					</div>
				</div>
				<div class="button">
					<a class="footer_picture" href=""></a>
					<a class="footer_picture" href=""></a>
				</div>
				<div class="song_func footer_picture">
					<div v-show="volume" class="volume">
						<div class="bg footer_picture"></div>
						<div>
							<div class="footer_picture"></div>
							<span @mousedown.self="volume_change($event)" class="btn volume_change"></span>
						</div>
					</div>
					<span @click="volume=!volume" class="volume_btn footer_picture"></span>
					<span class="pattern footer_picture"></span>
					<span class="song_count footer_picture">88</span>
				</div>
			</div>
			<div class="lock footer_picture">
				<span @click="lock_icon1=!lock_icon1" class="lock_icon footer_picture" :class="{'lock_icon1':lock_icon1}"></span>
			</div>
			<div class="lock_right footer_picture"></div>
		</div>
		
	</div>
</template>

<script>
	import { mapState,mapActions,mapGetters } from 'vuex';
	export default{
		data(){
			return {
				lock_icon1:false,
				volume:false,
			}
		},
		filters:{
			addTime:(time)=>{
				var interval = setInterval(function(){
					return time+=1000;
				},1000)
			},
			songTime:(time)=>{
				var minute = Math.floor(time/1000/60);
				var second = Math.floor(time/1000 - minute*60)
				return minute + ":" + (second < 10 ? "0" + second : second) ;
			}
		},
		methods:{
			footershow(e){
				e.target.style.bottom=0;
				e.target.style.transition='bottom .1s linear';
			},
			footerin(e){
				e.target.style.bottom=0;
			},
			footerleave(e){
				var timeout=setTimeout(function(){
					e.target.style.bottom="-46px";
					e.target.style.transition='bottom .4s linear';
				},800)
				e.target.onmouseenter=function(){
					clearTimeout(timeout);
					e.target.style.bottom=0;
					e.target.style.transition='bottom .1s linear';
				}
			},
			volume_change(e){
				e.target.onmousemove=function(){
					e.target.style.top=e.layerY+'px';
				}
			}
		},
		mounted(){
		},
		computed:{
			...mapState({
				resp:'data'
			})
		},
	}
</script>

<style lang="less" src='./frame.less'></style>
