<template>
	<div class="album">
		<a href="" :title="data.title">
			<img :src="data.imgSrc"/>
			<div class="bottom coverall">
				<span class="iconall Headset"></span>
				<span>{{data.time}}</span>
				<a class="play iconall" href=""></a>
			</div>
		</a>
		<p>
			<a href="" :title="data.title">
				<i v-if="data.radio" class="icon radio"></i>
				{{data.title}}
			</a>
		</p>
		<p v-if="data.title1">{{data.title1}}</p>
	</div>
</template>

<script>
	export default{
		props:['data'],
	}
</script>

<style lang="less" src="./Album.less"></style>