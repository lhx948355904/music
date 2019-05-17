import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		data:''
	},
	getters:{
		getMp3(state){
			return state.data
		}
	},
	mutations:{
		setSong(state,songInfo){
			state.data = songInfo
		}
	},
	actions:{
		getSong(context,songInfo){
			context.commit('setSong',songInfo)
		}
	}
})

export default store