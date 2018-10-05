<template>
 <div>
   	<div class="row">
   		
   		<div class="col-lg-12">
   			
   			<form class="form" @submit.prevent="login">
     			<h1>Transport Management System</h1>
     			<hr>
     			
     			<div class="form-group">
     				<label>Email</label>
     				<input required v-model="email" type="text" placeholder="Email" class="form-control"/>
     			</div>
    

     			<div class="form-group">
     				<label>Password</label>
     				<input required v-model="password" type="password" placeholder="Password" class="form-control"/>
     			</div>
     			
     			<hr/>
     			<button type="submit" class="btn btn-primary">Login</button>

   			</form>

   		</div>
   	</div>
 </div>
</template>
<script>
	export default {
		data(){
			return {
				email : "",
            	password : ""
            }
		},
		methods: {
		 	login: function () {
		   		let email = this.email 
		   		let password = this.password
		   		this.$store.dispatch('login', { email, password })
		   		.then(() => this.$router.push('/'))
		   		.catch(err => console.log(err))
		   	}
		}
	}
</script>