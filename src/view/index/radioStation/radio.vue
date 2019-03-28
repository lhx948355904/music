<template>
	<div id="radio">
		<frame></frame>
		<indexNav></indexNav>
		<div class="content">
			
		</div>
		<foot></foot>
	</div>
</template>

<script>
	import frame from '../../../components/frame/frame.vue';
	import indexNav from '../../../components/indexNav/indexNav.vue';
	import foot from '../../../components/footer/footer.vue';
	
	export default{
		components:{
			frame,indexNav,foot
		}
	}
</script>

<style lang="less" src='./radio.less'></style>