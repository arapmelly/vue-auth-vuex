<template>
	<div>
	


    <!-- ============================================================== -->
    <!-- Preloader - style you can find in spinners.css -->
    <!-- ============================================================== -->
   
    
        <!-- ============================================================== -->
        <!-- Topbar header - style you can find in pages.scss -->
        <!-- ============================================================== -->
    			
    		 <LoginNavComponent />

        <!-- ============================================================== -->
        <!-- End Topbar header -->
        <!-- ============================================================== -->
        	
        	
       	
        	<div class=" container-fluid">
        	
        		<div class="row" style="margin-top:20px;">
        			<div class="col-lg-6 ">
        				
        			</div>
        			<div class="col-lg-6 companyInfo">
        				<LoginComponent/>
        			</div>

        		</div>
        	</div>

      
       
  
  
	</div>
</template>

<script type="text/javascript">

	import LoginNavComponent from '../modules/core/components/LoginNavComponent.vue'
	import LoginComponent from '../modules/auth/components/LoginComponent.vue'

	export default {

		components: {
			LoginNavComponent,
			LoginComponent
		},

		mounted(){

		},

		data(){
			return {
				dashboardTab: true,
				sentTab: false,
				bus: false,
				users: false
			}
		},

		methods: {


		}
	}

</script>

<style>

.companyInfo {

	
}
</style>
