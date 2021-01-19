<template>
  <div class="users">
    <h3>Users:</h3>
    <vue-good-table
      :columns="column"
      :rows="rows"
      compactMode
      @on-row-click="onRowClick"
    >
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field=='action'">
          <router-link to="/edit"><button class="btn btn-success mr-2"><i class="fa fa-edit"></i></button></router-link>
          <router-link :to="{ path: '/userdetails/'+row.id}" ><button class="btn btn-info mr-2"><i class="fa fa-eye"></i></button></router-link>
          <router-link to="/delete"><button class="btn btn-danger mr-2"><i class="fa fa-trash"></i></button></router-link>
        </span>
      </template>
      <div slot="table-actions">
        <router-link to="/newUser"><button class="btn btn-outline-primary btn-mx mr-2">New User</button></router-link>
      </div>
    </vue-good-table>
  </div>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';
//import gql from "graphql-tag"
// const ALL_USERS_QUERY = gql`
//     query (
//       $options: PageQueryOptions
//     ) {
//       users(options: $options) {
//         data {
//           id
//           username
//           email
//         }
//       }
//     }`

export default {
  name: 'Users',
  data() {
    return {
      row: [],
      column: [
        {
          label: 'Username',
          field: 'name',
        },
        {
          label: 'Joined on',
          field: 'createdAt',
          dateInputFormat: 'yyyy-MM-dd', // expects 2018-03-16
          dateOutputFormat: 'MMM do yyyy', // outputs Mar 16th 2018
        },
        {
          label: 'Actions',
          field: 'action',
        },
      ],
      rows: [
        {
          id: 1,
          name: "John",
          createdAt: '2011-10-22',},
        {
          id: 2,
          name: "Jane",
          createdAt: '2011-10-31',},
        {
          id: 3,
          name: "Susan",
          createdAt: '2011-10-30',},
        {
          id: 4,
          name: "Chris",
          createdAt: '2011-10-11',},
        {
          id: 5,
          name: "Dan",
          createdAt: '2011-10-21',},
        {
          id: 6,
          name: "John",
          createdAt: '2011-10-31',
        },
        {
          id: 7,
          name: "Jane",
          createdAt: '2013-09-21',},
        {
          id: 8,
          name: "Susan",
          createdAt: '2013-10-31',},
      ],
      //users:[]
    };
  },
  methods: {
    onRowClick(params) {
      this.row = params.row;
      console.log(this.row)
    }
  },
  // apollo: {
  //   users:{
  //     query: ALL_POSTS_QUERY,
  //   }
  // },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    VueGoodTable
  }
}
</script>

<style scoped>
 .users{
   width: 90%;
   margin: auto;
 }
 .vgt{text-align:center}

</style>
