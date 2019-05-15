import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		mp3:''
	},
	getters:{
		getMp3(state){
			return state.mp3
		}
	},
	mutations:{
		setSong(state,songInfo){
			state.mp3 = songInfo
		}
	},
	actions:{
		getSong(context,songInfo){
			context.commit('setSong',songInfo)
		}
	}
})

export default store