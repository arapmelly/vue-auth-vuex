<template>
	<div>
	


    <!-- ============================================================== -->
    <!-- Preloader - style you can find in spinners.css -->
    <!-- ============================================================== -->
   
    
        <!-- ============================================================== -->
        <!-- Topbar header - style you can find in pages.scss -->
        <!-- ============================================================== -->
    			
    		 <navComponent />

        <!-- ============================================================== -->
        <!-- End Topbar header -->
        <!-- ============================================================== -->
        
        <div class="container-fluid">
        	
        	<div class="row">
        		<div class="col-lg-4"></div>
        		<div class="col-lg-4">
        			<LoginComponent/>
        		</div>

        	</div>
        </div>
       
  
  
	</div>
</template>

<script type="text/javascript">

	import navComponent from '../modules/core/components/NavComponent.vue'
	import LoginComponent from '../modules/auth/components/LoginComponent.vue'

	export default {

		components: {
			navComponent,
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
