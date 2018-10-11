<template>
  <div>

  	<NavComponent/>

  	<aside class="left-sidebar">



            <!-- Sidebar scroll-->
            <div class="scroll-sidebar">



                <!-- Sidebar navigation-->
                <nav class="sidebar-nav" >

             
                    <ul id="sidebarnav" class="list-unstyled">
                        <li class="active nav-item">
                            <a href="#" class="waves-effect" @click="dashboard_tab ^= true">
                                <i class="ti ti-desktop"></i>&nbsp;&nbsp;Dashboard</a>
                        </li>

                        <li class="nav-item">
                    		<a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle waves-effect">
                               <i class="ti ti-user"></i>&nbsp;&nbsp;
                            User Management</a>
                    		
                    		<ul class="collapse list-unstyled" id="homeSubmenu">
                        		<li>
                            		<a href="#" @click="users_tab ^= true">Users</a>
                        		</li>
                        		<li>
                            		<a href="#" @click="roles_tab ^= true">Roles</a>
                        		</li>
                        		<li>
                            		<a href="#" @click="permissions_tab ^= true">Permissions</a>
                        		</li>
                    		</ul>
                		</li>


                		<li class="nav-item">
                    		<a href="#priceSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle waves-effect">
                            <i class="ti ti-desktop"></i>&nbsp;&nbsp;
                        Price Management</a>
                    		
                    		<ul class="collapse list-unstyled" id="priceSubmenu">
                        		<li>
                            		<a href="#">Home 1</a>
                        		</li>
                        		<li>
                            		<a href="#">Home 2</a>
                        		</li>
                        		<li>
                            		<a href="#">Home 3</a>
                        		</li>
                    		</ul>
                		</li>

                        
                        <li class="nav-item">
                            <a href="#priceSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle waves-effect">
                            <i class="ti ti-desktop"></i>&nbsp;&nbsp;
                        Price Management</a>
                            
                            <ul class="collapse list-unstyled" id="priceSubmenu">
                                <li>
                                    <a href="#">Home 1</a>
                                </li>
                                <li>
                                    <a href="#">Home 2</a>
                                </li>
                                <li>
                                    <a href="#">Home 3</a>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <a href="#priceSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle waves-effect">Price Management</a>
                            
                            <ul class="collapse list-unstyled" id="priceSubmenu">
                                <li>
                                    <a href="#">Home 1</a>
                                </li>
                                <li>
                                    <a href="#">Home 2</a>
                                </li>
                                <li>
                                    <a href="#">Home 3</a>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <a href="#priceSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle waves-effect">Price Management</a>
                            
                            <ul class="collapse list-unstyled" id="priceSubmenu">
                                <li>
                                    <a href="#">Home 1</a>
                                </li>
                                <li>
                                    <a href="#">Home 2</a>
                                </li>
                                <li>
                                    <a href="#">Home 3</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    
                </nav>
                <!-- End Sidebar navigation -->
            </div>
            <!-- End Sidebar scroll-->
        </aside>


<div class="container-fluid">
        <div class="page-wrapper" >
            
            
<div style="margin-top:60px">

            <ul class="nav nav-tabs" role="tablist" >
                <li class="nav-item">
                    <a class="nav-link active" href="#dashboard" role="tab" data-toggle="tab">Dashboard</a>
                </li>
                
                <li class="nav-item" v-if="users_tab">
                    <a class="nav-link" href="#users" role="tab" data-toggle="tab">Users</a>
                </li>
                
                <li class="nav-item" v-if="roles_tab">
                    <a class="nav-link" href="#roles" role="tab" data-toggle="tab">Roles</a>
                </li>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content">
                <div role="tabpanel" class="tab-pane fade in active" id="dashboard" v-if="dashboard_tab">
                    <h1>Dashboad</h1>
                </div>
                <div role="tabpanel" class="tab-pane fade" id="users" v-if="users_tab">
                    bbb
                </div>
                <div role="tabpanel" class="tab-pane fade" id="roles" v-if="roles_tab">
                    ccc
                </div>
            </div>


</div>
        </div>
    </div>



   
  </div>
</template>

<script type="text/javascript">
	
	
	
	export default {

		mounted(){

		},

		data(){

			return {

                dashboard_tab: true,
                roles_tab: false,
                users_tab: false,
                permissions_tab: false,



			}
		},

        methods : {
            
        }
		
	}

</script>


<style>


.nav-list li a {
	text-decoration: none;
	display: block;
	padding: 10px;
	cursor: pointer;
	border-bottom: 1px solid #668AF0 !important;
	color: #9d9d9d;
}

.nav-list > li > a {
	color: #C4C4C4;
	font-size: 14px;
	padding-left: 13px !important;
	border-bottom: 1px solid #585858;
}

.nav-list > li > a:hover {
	background-color: #444444;
}

.nav-item {

    border-bottom:1px solid #C7C8CA;
}

.list-unstyled {

    text-align:left;
}


</style>
