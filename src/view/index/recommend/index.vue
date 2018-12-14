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
				<album></album>
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
				this.imgSrc=resp.banner;
				console.log(this)
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
