<template>
	<div id="indexNav">
		<ul>
			<router-link to='/'>
				<li :class="thisPage=='index'?'active':''">推荐</li>
			</router-link>
			<router-link to='/rankingList'>
				<li :class="thisPage=='rankingList'?'active':''">排行榜</li>
			</router-link>
			<router-link to='/song'>
				<li :class="thisPage=='song'?'active':''">歌单</li>
			</router-link>
			<router-link to='/radio'>
				<li :class="thisPage=='radio'?'active':''">主播电台</li>
			</router-link>
			<router-link to='/singer'>
				<li :class="thisPage=='singer'?'active':''">歌手</li>
			</router-link>
			<router-link>
				<li>新碟上架</li>
			</router-link>
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
