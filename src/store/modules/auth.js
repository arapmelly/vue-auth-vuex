
import axios from 'axios'

//status

const state = {
  		status: '',
  		token: localStorage.getItem('token') || '',
  		user : {}
}




//actions

const actions = {
	  	login({commit}, user){

	  	

	        return new Promise((resolve, reject) => {
	            commit('auth_request')

	            axios({url: API_URL+'/login', data: user, method: 'POST' })
	            .then(resp => {

	            	
	                const token = resp.data.access_token

	                
	                
	                localStorage.setItem('token', token)
	                // Add the following line:
	                axios.defaults.headers.common['Authorization'] = 'Bearer '+token

	                axios({url: API_URL+'/init', method: 'GET'}).then(resp => {
	                	const user = resp.data.auth_user

	                	commit('auth_user', user)
	                	commit('auth_success', token)
	                	
	                })

	               

	                
	                resolve(resp)
	            })
	            .catch(err => {
	            	
	                commit('auth_error')
	                localStorage.removeItem('token')
	                reject(err)
	            })


	          

	            
	        })
	    },
	    
	  	logout({commit}){
		    return new Promise((resolve, reject) => {
		      	commit('logout')
		      	localStorage.removeItem('token')
		      	delete axios.defaults.headers.common['Authorization']
		      	resolve()
		    })
	  	}
}


//mutations
const mutations = {
		auth_request(state){

	    	state.status = 'loading'	
	  	},

	  	auth_success(state, token){
		    state.status = 'success'
		    state.token = token
	  	},

	  	auth_error(state){
	    	state.status = 'error'
	  	},

	  	logout(state){
	    	state.status = ''
	    	state.token = ''
	  	},

	  	auth_user(state, user){
	  		state.user = user
	  	}

	  	
}



//getters

const getters = {
	  isLoggedIn: state => !!state.token,
	  authStatus: state => state.status,
	  authUser: state => state.user,
}



export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}






