<template>
<div>
     <header class="topbar" style="position: fixed; top: 0; width: 100%">
            <nav class="navbar top-navbar navbar-toggleable-sm navbar-light ">
                <!-- ============================================================== -->
                <!-- Logo -->
                <!-- ============================================================== -->
                
               
                <div class="navbar-header">
                    <a class="navbar-brand" href="index.html">
                        <!-- Logo icon -->
                         <b> 
                            <!--You can put here icon as well // <i class="wi wi-sunset"></i> //-->
                            <!-- Dark Logo icon -->
                           
                            <img src="assets/images/modern_coast_logo.png" alt="user" width="60%" />
                            
                         </b> 
                        <!--End Logo icon -->
                        <!-- Logo text -->
                         <span> 
                            <!-- dark Logo text -->
                           <!--  <img src="../assets/images/logo-text.png" alt="homepage" class="dark-logo" /> -->
                      
                        </span>
                    </a>
                </div>
              
                <!-- ============================================================== -->
                <!-- End Logo -->
                <!-- ============================================================== -->
                <div class="navbar-collapse">
                    <!-- ============================================================== -->
                    <!-- toggle and nav items -->
                    <!-- ============================================================== -->
                    <ul class="navbar-nav mr-auto mt-md-0 ">
                        <!-- This is  -->
                        <li class="nav-item"> <a class="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark" href="javascript:void(0)"><i class="ti-menu"></i></a> </li>
                       <!--  <li class="nav-item hidden-sm-down">
                            <form class="app-search p-l-20">
                                <input type="text" class="form-control" placeholder="Search for..."> <a class="srh-btn"><i class="ti-search"></i></a>
                            </form>
                        </li> -->
                    </ul>
                    <!-- ============================================================== -->
                    <!-- User profile and search -->
                    <!-- ============================================================== -->
                    <ul class="navbar-nav my-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><!-- <img src="" alt="user" class="profile-pic m-r-5" /> -->
                            {{auth_user.user_name}}</a>
                            <div class="dropdown-content">
                            <a href="#">Profile</a>
                            <a href="#" @click="logout()">Logout</a>
                        </div>
                        </li>
                        
                    </ul>

                    

                </div>
            </nav>
        </header>
</div>
</template>

<script type="text/javascript">

import { mapGetters, mapState } from 'vuex'

  
  export default {

    computed: {

           

        ...mapGetters('auth', {
                auth_user: 'authUser'
            })



    },

    mounted(){
       
       
    },

    data(){

      return {
        user: {}
      }
    },

    methods: {


        logout: function () {
            this.$store.dispatch('auth/logout')
            .then(() => {
                this.$router.push('/')
            })
        }


    }
  }
</script>

<style>
/* Style The Dropdown Button */
.dropbtn {
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
    position: relative;
    display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #f1f1f1}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
    display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
    background-color: #3e8e41;
}
</style>
