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