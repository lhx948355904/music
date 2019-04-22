<template>
	<div id="singer">
		<frame></frame>
		<indexNav></indexNav>
		<foot></foot>
	</div>
</template>

<script>
	import frame from '../../../components/frame/frame.vue';
	import indexNav from '../../../components/indexNav/indexNav.vue';
	import foot from '../../../components/footer/footer.vue';
	export default{
		components:{frame,indexNav,foot},
	}
</script>

<style src='./singer.less' lang="less"></style>