<template>
  <div class="users">
    <h3>Пользователи :</h3>
    <vue-good-table
      :columns="column"
      :rows="rows"
      compactMode
      @on-row-click="onRowClick"
    >
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field=='action'">
          <router-link :to="{ path: '/edit-user/'+row.id}"><button class="btn btn-success mr-2"><i class="fa fa-edit"></i></button></router-link>
          <router-link :to="{ path: '/show-user/'+row.id}" ><button class="btn btn-info mr-2"><i class="fa fa-eye"></i></button></router-link>
          <button class="btn btn-danger mr-2"><i class="fa fa-trash"></i></button>
        </span>
      </template>
      <div slot="table-actions">
        <router-link to="/new-user"><button class="btn btn-outline-primary btn-mx mr-2">Добавить</button></router-link>
      </div>
    </vue-good-table>
  </div>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';

export default {
  name: 'Users',
  data() {
    return {
      row: [],
      column: [
        {
          label: 'Имя',
          field: 'name',
        },
        {
          label: 'Зарегистрировался',
          field: 'createdAt',
          dateInputFormat: 'yyyy-MM-dd', // expects 2018-03-16
          dateOutputFormat: 'MMM do yyyy', // outputs Mar 16th 2018
        },
        {
          label: 'Действия',
          field: 'action',
        },
      ],
      rows: [
        {
          id: 1,
          name: "Иван Иванов",
          createdAt: '2011-10-22',},
        {
          id: 2,
          name: "Андрей Богданчиков",
          createdAt: '2011-10-31',},
        {
          id: 3,
          name: "Алексей Кавокин",
          createdAt: '2011-10-30',},
        {
          id: 4,
          name: "Кристофер Мур",
          createdAt: '2011-10-11',},
        {
          id: 5,
          name: "Александр Иванов",
          createdAt: '2011-10-21',},
        {
          id: 6,
          name: "Константин Латута",
          createdAt: '2011-10-31',
        },
        {
          id: 7,
          name: "Нурсултан Назарбаев",
          createdAt: '2013-09-21',},
      ],
    };
  },
  methods: {
    onRowClick(params) {
      this.row = params.row;
      console.log(this.row)
    }
  },

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
