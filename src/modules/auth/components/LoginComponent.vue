<template>
 <div>
   	<div class="row">
   		
   		<div class="col-lg-8 loginForm">
   			
   			<form class="form" @submit.prevent="login">
               
     			
     			<div class="login-header" style="text-align:center">
     				<img src="assets/images/modern_coast_logo.png" />
     			</div>
     			<hr>

                
                <div style="padding-left:150px;">
                    <div class="loader" v-if="auth_status == 'loading' " style="float:center; ">
                    
                    </div>
                </div>


                <div class="alert alert-danger" v-if="auth_status == 'error' ">
                    <p>There was an error. Please try again</p>
                </div>
     			
     			<div class="form-group">
     				<label>Username</label>
     				<input required v-model="email" type="text" class="form-control"/>
     			</div>
    

     			<div class="form-group">
     				<label>Password</label>
     				<input required v-model="password" type="password" class="form-control"/>
     			</div>
     			
     			
     			<button type="submit" class="btn btn-primary ">Login</button>

     			<p>
     				<i style="font-size:10px; padding:5px;">
     					Note: 3 failed login attempts will raise security on the account, activating a 10 second time limit ban 
     				</i>
     			</p>

     			<hr/>
     			
     			<p>
     					<a href="">Reset Forgotten password</a>
     			</p>

     			<p>
     					<a href="">Resend Account Activation Code</a>
     			</p>

   			</form>

   		</div>
   	</div>
 </div>
</template>
<script>

import { mapGetters, mapState } from 'vuex'


	export default {

        computed: {

            /* ...mapState({
                auth_status: state => state.auth.status

            }),*/

            ...mapGetters('auth', {
                auth_status: 'authStatus'
            })



        },

		data(){
			return {
				email : "",
            	password : "",
                status: ""

            }
		},
		methods: {
		 	login: function () {

                
                
                
		   		let username = this.email 
		   		let password = this.password
		   		this.$store.dispatch('auth/login', { username, password })
		   		.then(resp => {
                    
                    if(resp.status == 200){

                        

                        this.$router.push('/dashboard')
                    }
                    
                })
		   		.catch(err => {
                   
                    console.log(err)
                    
                })
		   	}
		}
	}
</script>

<style>

.loginForm {

	border: 10px solid #D8D2D0;
	padding: 20px;
	text-align:left
}

.login-header h1{
	background-color: #D8D2D0;
	color: #FFF;
	padding:40px;

}
</style>