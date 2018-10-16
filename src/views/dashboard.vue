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
                            <a href="#" class="waves-effect" @click="newTab('Dashboard')">
                                <i class="ti ti-desktop"></i>&nbsp;&nbsp;Dashboard</a>
                        </li>

                        <li class="nav-item">
                            <a href="#bookingSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle waves-effect">
                            <i class="ti ti-receipt"></i>&nbsp;&nbsp;
                        Booking Management</a>
                            
                            <ul class="collapse list-unstyled" id="bookingSubmenu">
                                <li>
                                    <a href="#" @click="newTab('Tickets')">Tickets</a>
                                </li>
                                <li>
                                    <a href="#" @click="newTab('Reservations')">Reservations</a>
                                </li>
                                
                            </ul>
                        </li>

                        <li class="nav-item">
                    		<a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle waves-effect">
                               <i class="ti ti-user"></i>&nbsp;&nbsp;
                            User Management</a>
                    		
                    		<ul class="collapse list-unstyled" id="homeSubmenu">
                        		<li>
                            		<a href="#" @click="newTab('Users')">Users</a>
                        		</li>
                        		<li>
                            		<a href="#" @click="newTab('Roles')">Roles</a>
                        		</li>
                        		<li>
                            		<a href="#" @click="newTab('Permissions')">Permissions</a>
                        		</li>
                    		</ul>
                		</li>


                		<li class="nav-item">
                    		<a href="#priceSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle waves-effect">
                            <i class="ti ti-wallet"></i>&nbsp;&nbsp;
                        Price Management</a>
                    		
                    		<ul class="collapse list-unstyled" id="priceSubmenu">
                        		<li>
                            		<a href="#" @click="newTab('Prices')">Prices</a>
                        		</li>
                        		<li>
                            		<a href="#" @click="newTab('Offers')">Offers</a>
                        		</li>
                        		<li>
                            		<a href="#" @click="newTab('Discounts')">Discounts</a>
                        		</li>
                    		</ul>
                		</li>

                        
                        <li class="nav-item">
                            <a href="#routeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle waves-effect">
                            <i class="ti ti-location-pin"></i>&nbsp;&nbsp;
                        Route Management</a>
                            
                            <ul class="collapse list-unstyled" id="routeSubmenu">
                                <li>
                                    <a href="#" @click="newTab('Towns')">Towns</a>
                                </li>
                                <li>
                                    <a href="#" @click="newTab('Branches')">Branches</a>
                                </li>
                                <li>
                                    <a href="#" @click="newTab('Routes')">Routes</a>
                                </li>
                            </ul>
                        </li>


                        <li class="nav-item">
                            <a href="#fleetSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle waves-effect">
                            <i class="ti ti-truck"></i>&nbsp;&nbsp;
                        Fleet Management</a>
                            
                            <ul class="collapse list-unstyled" id="fleetSubmenu">
                                <li>
                                    <a href="#" @click="newTab('Buses')">Buses</a>
                                </li>
                                <li>
                                    <a href="#" @click="newTab('Bus Types')">Bus Types</a>
                                </li>
                                <li>
                                    <a href="#" @click="newTab('Seat Types')">Seat Types</a>
                                </li>
                                <li>
                                    <a href="#" @click="newTab('Staff')">Staff</a>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <a href="#scheduleSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle waves-effect">
                            <i class="ti ti-alarm-clock"></i>&nbsp;&nbsp;
                        Schedule Management</a>
                            
                            <ul class="collapse list-unstyled" id="scheduleSubmenu">
                                <li>
                                    <a href="#" @click="newTab('Schedules')">Schedules</a>
                                </li>
                                <li>
                                    <a href="#" @click="newTab('Bus Hires')">Bus Hires</a>
                                </li>
                                
                            </ul>
                        </li>


                        <li class="nav-item">
                            <a href="#customerSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle waves-effect">
                            <i class="ti ti-user"></i>&nbsp;&nbsp;
                        Customer Management</a>
                            
                            <ul class="collapse list-unstyled" id="customerSubmenu">
                                <li>
                                    <a href="#" @click="newTab('Customers')">Customers</a>
                                </li>
                                <li>
                                    <a href="#" @click="newTab('Loyalty Points')">Loyalty Points</a>
                                </li>
                                
                            </ul>
                        </li>


                        


                        <li class="nav-item">
                            <a href="#expenseSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle waves-effect">
                            <i class="ti ti-files"></i>&nbsp;&nbsp;
                        Expense Management</a>
                            
                            <ul class="collapse list-unstyled" id="expenseSubmenu">
                                <li>
                                    <a href="#" @click="newTab('Petty Cash')">Petty Cash</a>
                                </li>
                                
                                
                            </ul>
                        </li>

                        <li class="nav-item">
                            <a href="#reportsSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle waves-effect">
                            <i class="ti ti-bar-chart"></i>&nbsp;&nbsp;
                        Reports Management</a>
                            
                            <ul class="collapse list-unstyled" id="reportsSubmenu">
                                <li>
                                    <a href="#" @click="newTab('Petty Cash')">Petty Cash</a>
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
    

       <b-card no-body>
      <b-tabs >

        <!-- Render Tabs -->
        <b-tab :title="`${i}`"  v-for="i in tabs" :key="i" active>
          
            <div style="padding-top:20px;">
            <span v-if="i == 'Dashboard'"><DashboardComponent /></span>
            <span v-if="i == 'Users'"><UserComponent /></span>
        </div>

          <br/>
          
          <!-- <b-btn size="sm" variant="danger" class="float-right" @click="()=>closeTab(i)">
            Close tab
          </b-btn> -->
        </b-tab>


        <!-- New Tab Button (Using tabs slot) -->
        <!-- <b-nav-item slot="tabs" @click.prevent="newTab" href="#">
          +
        </b-nav-item> -->

        <!-- Render this if no tabs -->
        <div slot="empty" class="text-center text-muted">
          <DashboardComponent></DashboardComponent>
          
        </div>
      </b-tabs>
    </b-card>


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
                tabs: [],
                tabCounter: 0


			}
		},

        methods : {

            setPermissionsTab(){

                //get the current active tab and set to false
                //

                this.permissions_tab = true
                this.dashboard_tab = false
                this.roles_tab = false
                this.users_tab = false
            },


            closeTab (x) {
      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i] === x) {
          this.tabs.splice(i, 1)
        }
      }
    },
        
        newTab (tabname) {

       
            this.closeTab(tabname)
            this.tabs.push(tabname)
        
    
        }
    
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
