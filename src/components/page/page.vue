<template>
	<div id="pages">
		<span @click="postPageSize" class="pageup"><i class="iconfont icon-arrow-left"></i>上一页</span>
		<template  v-for='item in setting.pageSize' v-if="item==1">
			<span @click="postPageSize(item)" class="pageSize">{{item}}</span>
		</template>
		<template v-else-if='nowPage>5&&item==2'>
			<span @click="postPageSize(item)" class="pageSize">...</span>
		</template>
		<template v-else-if="item>0">
			<span @click="postPageSize(item)" class="pageSize">{{item}}</span>
		</template>
		<template v-else-if='nowPage<setting.pageSize-5&&item==pageSize-1'>
			<span @click="postPageSize(item)" class="pageSize">...</span>
		</template>
		<template v-else-if='item==setting.pageSize'>
			<span @click="postPageSize(item)" class="pageSize">{{item}}</span>
		</template>
		<span @click="postPageSize" class="pagedown">下一页<i class="iconfont icon-arrow-right"></i></span>
	</div>
</template>

<script>
	export default{
		props:['setting'],
		data(){
			return {
				allCount:"",
				count:"",
				pageSize:'',
				nowPage:""
			}
		},
		methods:{
			postPageSize(pageSize){
				window.pageSize = this.nowPage = pageSize;
				this.$emit('pageSize',pageSize);
				
			}
		},
		mounted(){
			this.count = this.setting.count;
			this.allCount = this.setting.pageSize;
			window.pageSize = 0;
		},
	}
</script>

<style src='./page.less' lang="less" scoped></style>