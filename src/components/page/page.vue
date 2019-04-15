<template>
	<div id="pages">
		<span @click="postPageSize" class="pageup"><i class="iconfont icon-arrow-left"></i>上一页</span>
		<template  v-for='item in setting.pageSize'>
			<span v-if="item==1" @click="postPageSize(item,$event)" class="active pageSize">{{item}}</span>
			<span v-if="nowPage>5&&item==2" @click="postPageSize(item,$event)" class="pageSize">...</span>
			
			<template v-if="item<9&&item>1&&nowPage<6">
				<span @click="postPageSize(item,$event)" class="pageSize">{{item}}</span>
			</template>
			<template v-else-if="nowPage>=6&&nowPage<setting.pageSize-4">
				<span v-if="item<=nowPage+3&&item>=nowPage-3" @click="postPageSize(item,$event)" class="pageSize">{{item}}</span>
			</template>
			<template v-else-if="item<setting.pageSize&&item>setting.pageSize-8&&nowPage>=setting.pageSize-4">
				<span @click="postPageSize(item,$event)" class="pageSize">{{item}}</span>
			</template>
			
			<span v-if="nowPage<=setting.pageSize-5&&item==setting.pageSize-1" @click="postPageSize(item,$event)" class="pageSize">...</span>
			<span v-if="item==setting.pageSize" @click="postPageSize(item,$event)" class="pageSize">{{item}}</span>
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
			this.count = this.setting.count;
			this.allCount = this.setting.pageSize;
			window.pageSize = 1;
		},
	}
</script>

<style src='./page.less' lang="less" scoped></style>