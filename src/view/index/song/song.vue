<template>
	<div id="song">
		<frame></frame>
		<indexNav></indexNav>
		<div class="content">
			<div class="top">
				<span >{{cate}}</span>
				<a class="change button2" @click="cateShow = true"><i ref="catebtn" class="button2">选择分类<span class="icon"></span></i></a>
				<span class="new">
					<span @click="hotsong" :class="{active:showhot}"><a href="">热门</a></span>
					<span @click="newsong" :class="{active:!showhot}"><a href="">最新</a></span>
				</span>
				<div class="cate" ref='cate' v-show="cateShow">
					<div class="all"><span>全部风格</span></div>
					<ul>
						<li v-for="item in songCateList">
							<div><i :class="item.icon" class="iconfont"></i>{{item.key}}</div>
							<div>
								<span @click="catesong($event)" v-for="item1 in item.value">{{item1}}</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="value">
				<div v-for = 'item in songList'>
					<album v-for = "item1 in item" :data = "item1"></album>
				</div>
			</div>
			<page @pageSize='showPage' :allCount="pageSize"></page>
		</div>
		<foot></foot>
	</div>
</template>

<script>
	import frame from '@/components/frame/frame.vue';
	import indexNav from '@/components/indexNav/indexNav.vue';
	import foot from '@/components/footer/footer.vue';
	import album from '@/components/Album/Album.vue';
	import page from '@/components/page/page.vue'
	
	export default{
		components:{
			frame,indexNav,foot,album,page
		},
		data(){
			return {
				songList:[],
				songCateList:[],
				pageSize:"",
				cateShow:false,
				showhot:true,
				//获取歌单参数
				status:'hot',
				cate:'全部',
				limit:35,
				offset:0,
			}
		},
		methods:{
			//获取数据
			getData(
				status = 'hot',
				cate = '全部',
				limit = 35,
				offset = 0
			){
				var self = this;
				this.songList = [];
				self.$http.get("/api/playlist/"+status+"/"+cate+"/"+limit+"/"+offset).then((resp)=>{
					self.pageSize = resp.data.pageCount*1
					let data = resp.data.data,i=-1;
					for(let index in data){
						if(index%5==0){
							self.songList.push([])
							i++;
						}
						self.songList[i].push(data[index])
					}
				})
			},
			//分页点击回调
			showPage(data){
				this.offset = (data-1)*35;
				this.getData(this.status,this.cate,this.limit,this.offset)
			},
			//热门
			hotsong(){
				this.showhot = true;
				this.status = 'hot';
				this.getData(this.status);
			},
			//最新
			newsong(){
				this.showhot = false;
				this.status = 'new';
				this.getData(this.status);
			},
			//分类选歌
			catesong(e){
				this.cateShow = false;
				this.cate = e.target.innerText;
				this.getData(this.status,this.cate)
			}
		},
		mounted(){
			var self = this;
			//默认热门第一页
			this.getData();
			
			//获取歌单分类
			this.$http.get("/api/playlist/cate").then((resp)=>{
				this.songCateList = resp.data.data;
				var arr = ['icon-diqiu','icon-fenggepitchon','icon-kafeiting','icon-qinggan','icon-theme']
				for(let x in arr){
					this.songCateList[x].icon = arr[x]
				}
			})
			
			//点击其他分类消失
			document.addEventListener('click',function(e){
				if(e.target == self.$refs.catebtn){
					self.cateShow = true;
				}else{
					self.cateShow = false;
				}
			},true)
			
			this.$refs.cate.onclick = ()=>{
				this.$nextTick(()=>{
					this.cateShow = true;
				})
			}
		}
	}
</script>

<style scoped lang="less" src="./song.less"></style>
