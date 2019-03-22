<template>
	<div class="album">
		<a :href="data.namehref" :title="data.title">
			<img :src="data.imgSrc"/>
			<div class="bottom coverall">
				<span class="iconall Headset"></span>
				<span>{{data.time}}</span>
				<a class="play iconall" href=""></a>
			</div>
		</a>
		<p v-if="!data.author">
			<a href="" :title="data.title">
				<i v-if="data.radio" class="icon radio"></i>
				{{data.title}}
			</a>
		</p>
		<div v-else>
			<p><a :href="data.namehref">{{data.title}}</a></p>
			<p>
				<span>by</span>
				<a :href="data.authorhref">
					{{data.author}}
					<i v-if="data.star" class="icon"></i>
				</a>
			</p>
		</div>
		<p v-if="data.title1">{{data.title1}}</p>
	</div>
</template>

<script>
	export default{
		props:['data'],
	}
</script>

<style lang="less" src="./Album.less"></style>