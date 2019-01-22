<template>
	<div id="indexNav">
		<ul>
			<li :class="thisPage=='index'?'active':''"><a href="/">推荐</a></li>
			<li :class="thisPage=='rankingList'?'active':''"><a href="/rankingList">排行榜</a></li>
			<li><a href="">歌单</a></li>
			<li><a href="">主播电台</a></li>
			<li><a href="">歌手</a></li>
			<li><a href="">新碟上架</a></li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				thisPage:this.$router.history.current.name
			}
		}
	}
</script>

<style lang="less" src='./indexNav.less'></style>
