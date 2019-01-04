<template>
	<div id="Album">
		<div>
			<img :src="data.imgSrc"/>
			<div class="bottom">
				<span></span>
				<span>{{data.time}}</span>
				<a href=""></a>
			</div>
			<p>{{data.title}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		props:['data'],
	}
</script>

<style lang="less" src="./Album.less"></style>