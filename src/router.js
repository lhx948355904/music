import Vue from 'vue';
import Router from 'vue-router';
import index from './view/index/recommend/index.vue';
import rankingList from './view/index/rankingList/rankingList.vue';

Vue.use(Router);

export default new Router({
	mode:"history",
	base:process.env.BASE_URL,
	routes:[{
		path:'/',
		name:'index',
		component:index,
	},{
		path:'/rankingList',
		name:'rankingList',
		component:rankingList,
	}]
})
