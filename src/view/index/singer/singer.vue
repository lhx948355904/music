<template>
	<div id="singer">
		<frame></frame>
		<indexNav></indexNav>
		
		<div class="content">
			<div class="left">
				<div v-for="item in singerList">
					<div class="title">{{item.groupName}}</div>
					<ul>
						<li v-for="item1 in item.group"></li>
					</ul>
				</div>
			</div>
			
			<div class="right">
			
			</div>
		</div>
		
		<foot></foot>
	</div>
</template>

<script>
	import frame from '@/components/frame/frame.vue';
	import indexNav from '@/components/indexNav/indexNav.vue';
	import foot from '@/components/footer/footer.vue';
	export default{
		components:{frame,indexNav,foot},
		data(){
			return {
				singerList:[],
			}
		},
		mounted(){
			this.$http.get('/api/singerList').then((resp)=>{
				this.singerList = resp.data.dataList;
				console.log(resp)
			})
		}
	}
</script>

<style scoped src='./singer.less' lang="less"></style>