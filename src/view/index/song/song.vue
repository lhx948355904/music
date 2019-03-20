<template>
	<div id="song">
		<frame></frame>
		<indexNav></indexNav>
		<div class="content">
			<div class="top">
				<span>全部</span>
				<a class="change button2"><i class="button2">选择分类<span class="icon"></span></i></a>
				<span class="button">
					<span class="active"><a href="">热门</a></span>
					<span><a href="">最新</a></span>
				</span>
			</div>
			<div class="value">
				<album v-for = "item in songList" :data = "item"></album>
			</div>
			<div class="page"></div>
		</div>
		<foot></foot>
	</div>
</template>

<script>
	import frame from '../../../components/frame/frame.vue';
	import indexNav from '../../../components/indexNav/indexNav.vue';
	import foot from '../../../components/footer/footer.vue';
	import album from '../../../components/Album/Album.vue'
	export default{
		components:{
			frame,indexNav,foot,album
		},
		data(){
			return {
				songList:""
			}
		},
		mounted(){
			this.$http.get("json/song.json").then((resp)=>{
				console.log(resp);
				this.songList = resp.data.songList;
			})
		}
	}
</script>

<style scoped lang="less" src="./song.less"></style>
