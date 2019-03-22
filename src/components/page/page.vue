<template>
	<div id="pages">
		<span class="pageup"><i class="iconfont icon-arrow-left"></i>上一页</span>
		<span class="pageSize" v-for='item in count'>{{item}}</span>
		<span class="pagedown">下一页<i class="iconfont icon-arrow-right"></i></span>
	</div>
</template>

<script>
	export default{
		props:['setting'],
		data(){
			return {
				el:"",
				count:""
			}
		},
		mounted(){
			setTimeout(()=>{
				this.el = this.setting.el.pages;
				let child = this.el.children.length;
				
				this.count = Math.ceil(child/this.setting.count);
			})
			
			/*this.$http.get("/apis/playlist").then((data)=>{
				console.log(data)
			})*/
		},
	}
</script>

<style src='./page.less' lang="less" scoped></style>