<template>
  <div id="app">
  	<router-view/>
  	<audio ref='audio' autoplay :src="this.$store.getters.getMp3.url"></audio>
  </div>
</template>

<style lang="less">
	body,html,#app{
		width: 100%;
		height: 100%;
	}
</style>
