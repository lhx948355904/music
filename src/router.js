import Vue from 'vue';
import Router from 'vue-router';
import index from './view/index/recommend/index.vue';
import rankingList from './view/index/rankingList/rankingList.vue';
import song from './view/index/song/song.vue';
import radio from './view/index/radioStation/radio.vue';

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
	},{
		path:'/song',
		name:'song',
		component:song,
	},{
		path:'/radio',
		name:'radio',
		component:radio,
	}]
})
