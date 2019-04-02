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
				<div v-for = 'item in songList'>
					<album v-for = "item1 in item" :data = "item1"></album>
				</div>
			</div>
			<page @pageSize='showPage' :setting="pageSetting"></page>
		</div>
		<foot></foot>
	</div>
</template>

<script>
	import frame from '../../../components/frame/frame.vue';
	import indexNav from '../../../components/indexNav/indexNav.vue';
	import foot from '../../../components/footer/footer.vue';
	import album from '../../../components/Album/Album.vue';
	import page from '../../../components/page/page.vue'
	
	export default{
		components:{
			frame,indexNav,foot,album,page
		},
		data(){
			return {
				songList:[],
				pageSetting:{
					pageSize:"",
					count:7
				},
			}
		},
		methods:{
			getData(
				status = 'hot',
				cate = '全部',
				limit = 35,
				offset = 0
			){
				var self = this;
				self.$http.get("/api/playlist/"+status+"/"+cate+"/"+limit+"/"+offset).then((resp)=>{
					let data = resp.data,i=-1;
					for(let index in data){
						if(index%5==0){
							self.songList.push([])
							i++;
						}
						self.songList[i].push(data[index])
					}
				})
			},
			showPage(data){
				console.log(data);
				this.songList = [];
				this.getData('hot','全部',35,data*35)
			}
		},
		mounted(){
			
			this.getData();
			//默认总页数
			this.$http.get("/api/playlistCount").then((resp)=>{
				this.pageSetting.pageSize=resp.data;
			})
		}
	}
</script>

<style scoped lang="less" src="./song.less"></style>
