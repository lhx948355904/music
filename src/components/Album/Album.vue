<template>
	<div class="album">
		<img :src="data.imgSrc"/>
		<div class="bottom coverall" :title="data.title">
			<span class="iconall Headset"></span>
			<span>{{data.time}}</span>
			<a class="play iconall" href=""></a>
		</div>
		<p>
			<a href="" :title="data.title">
				<i v-if="data.radio" class="icon radio"></i>
				{{data.title}}
			</a>
		</p>
	</div>
</template>

<script>
	export default{
		props:['data'],
	}
</script>

<style lang="less" src="./Album.less"></style>