<template>
	<div id="pages">
		<span>1</span>
		<span>2</span>
		<span>3</span>
		<span>4</span>
	</div>
</template>

<script>
	export default{
		props:['el','count'],
		data(){
			return {
				
			}
		},
		mounted(){
			setTimeout(()=>{
				var el = this.el;
				console.log(el.children)
			})
		},
	}
</script>

<style src='./page.less' lang="less" scoped></style>