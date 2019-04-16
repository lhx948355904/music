<template>
	<div id="pages">
		<span @click="postPageSize" class="pageup"><i class="iconfont icon-arrow-left"></i>上一页</span>
		<template  v-for='item in allCount'>
			<span v-if="item==1" @click="postPageSize(item,$event)" class="active pageSize">{{item}}</span>
			<span v-if="nowPage>5&&item==2" @click="postPageSize(item,$event)" class="pageSize">...</span>
			
			<template v-if="item<9&&item>1&&nowPage<6">
				<span @click="postPageSize(item,$event)" class="pageSize">{{item}}</span>
			</template>
			<template v-else-if="nowPage>=6&&nowPage<allCount-4">
				<span v-if="item<=nowPage+3&&item>=nowPage-3" @click="postPageSize(item,$event)" class="pageSize">{{item}}</span>
			</template>
			<template v-else-if="item<allCount&&item>allCount-8&&nowPage>=allCount-4">
				<span @click="postPageSize(item,$event)" class="pageSize">{{item}}</span>
			</template>
			
			<span v-if="nowPage<=allCount-5&&item==allCount-1" @click="postPageSize(item,$event)" class="pageSize">...</span>
			<span v-if="item==allCount" @click="postPageSize(item,$event)" class="pageSize">{{item}}</span>
		</template>
		<span @click="postPageSize" class="pagedown">下一页<i class="iconfont icon-arrow-right"></i></span>
	</div>
</template>

<script>
	export default{
		props:['allCount'],
		data(){
			return {
				pageSize:'',
				nowPage:1
			}
		},
		methods:{
			postPageSize(pageSize,e){
				window.pageSize = this.nowPage = pageSize;
				this.$emit('pageSize',pageSize);
				var text = e.toElement.innerText;
				this.$nextTick(()=>{
					var el = document.querySelectorAll('.pageSize');
					for(let x of el){
						x.classList.remove('active');
						if(x.innerText == text){
							x.classList.add('active')
						}
					}
				})
			}
		},
		mounted(){
			window.pageSize = 1;
		},
	}
</script>

<style src='./page.less' lang="less" scoped></style>