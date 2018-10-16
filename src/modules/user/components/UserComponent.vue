<template>
  <div>

    <v-card>
      <v-card-title>
        

        <v-toolbar flat color="white">
          

            <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>

            <v-divider class="mx-2" inset vertical></v-divider>

            <v-dialog v-model="dialog" max-width="500px">
              <v-btn slot="activator" color="primary" dark class="mb-2">New User</v-btn>
            </v-dialog>

          </v-toolbar>

        <v-spacer></v-spacer>
        
      </v-card-title>
 
    <v-data-table :headers="headers" :items="users" :search="search" v-model="selected" item-key="user_name" class="elevation-1">

     
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.user_name }}</td>
        <td class="text-xs-left">{{ props.item.user_email }}</td>
        <td class="text-xs-left">{{ props.item.user_phone_number }}</td>
        <td class="justify-center layout px-0">
          <v-icon small class="mr-2" @click="editItem(props.item)">
            menu
          </v-icon>
          
        </td>
        
      </template>

      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>

      <template slot="no-data">
        <v-alert :value="true" color="error" icon="warning">
          There is nothing to display
        </v-alert>
      </template>

      <template slot="pageText" slot-scope="props">
        From {{ props.pageStart }} - {{ props.pageStop }} to {{ props.itemsLength }}
      </template>
    
    </v-data-table>

  </v-card>

  </div>
</template>

<script>
    
    import { mapGetters, mapState } from 'vuex'

    export default {

    	computed : {

    		...mapGetters('user', {
                users: 'userList',
                status: 'status'
            })



    	},

    	mounted(){

    		this.getUsers()
    	},

    	
    	methods : {

    		

    		getUsers(){
    			
    			this.$store.dispatch('user/list').then(resp => {

    				console.log(resp)
    			}).catch(err => {
    				console.log(err)
    			})
    		}


    	},

    	data() {

    		return {
          search: '',
    			headers: [
            { text: 'Name', align: 'left', sortable: false, value: 'user_name'},
            { text: 'Email', value: 'user_email', align: 'left' },
            { text: 'Phone Number', align: 'left', value: 'user_phone_number' },
            { text: 'Actions', sortable: false, align: 'left', value: 'actions'}
          ]

    		}
    	}
    }

   
</script>

<style>

.headTab {

	background-color: #f5f7f7;
	color: #fff;
	margin-top:10px;
	margin-bottom:10px;
	padding:3px;

} 

</style>