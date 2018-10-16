import axios from 'axios'

const state = {

	status: '',
	users: [],
	user: {}
}


const actions = {

	list({commit}){

		return new Promise((resolve, reject) => {
			commit('user_request')

			

			axios({url:API_URL+'/users', method: 'GET'})
			.then(resp => {

				
				const users = resp.data.results

				commit('user_list', users)

				commit('user_success')
			})
		})
	}
}


const mutations = {

	user_request(state){
		state.status = 'loading'
	},

	user_success(state){
		state.status = 'success'
	},

	user_list(state, users){
		state.users = users
	}
}


const getters = {

	userList: state => state.users,
	status: state => state.status

}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}