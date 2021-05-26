<template>
  <div class="meta-table">
    <vue-good-table
      :columns="columns"
      :rows="rows"
      styleClass="vgt-table condensed striped"
      :search-options="{
        enabled: true,
        placeholder: 'Введите текст для поиска',
      }"
      :pagination-options="paginationOptions"
    >
      <div slot="table-actions">
        <router-link to="/new-waste">
          <button type="button" class="btn btn-outline-primary btn-sm mr-2">
            + Новый отход
          </button>
        </router-link>
        <!-- download doc -->

        <button
          class="btn btn-outline-primary btn-sm mr-2"
          @click.prevent="exportWord"
        >
          <i class="material-icons">cloud_download</i>
        </button>

        <!-- END download doc -->
      </div>
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'action'">
          <router-link to="/edit-waste">
            <button class="btn-success btn-small btn mr-2">
              <i class="material-icons">open_in_new</i>
            </button>
          </router-link>
          <router-link to="/show-waste">
            <button class="btn-info btn-small btn mr-2">
              <i class="material-icons">visibility</i>
            </button>
          </router-link>
          <button class="btn-danger btn-small btn mr-2">
            <i class="material-icons">delete</i>
          </button>
        </span>
      </template>
    </vue-good-table>
  </div>
</template>


<script>
import 'vue-good-table/dist/vue-good-table.css';
import { VueGoodTable } from 'vue-good-table';
import '@/assets/scss/meta-table.scss';

export default {
  name: "WastePasportTable",
  data(){
    return{
      columns: [
        {
          label: 'Наименование отходов',
          field: 'name',
        },
        {
          label: 'Код отхода',
          field: 'code',
        },
        {
          label: 'Агрегатное состояние отхода',
          field: 'state',
        },
        {
          label: 'Индекс отхода',
          field: 'index',
        },
        {
          label: 'Лимит',
          field: 'limit',
        },
        {
          label: 'Лимит KZT',
          field: 'limitkzt',
        },
        {
          label: 'Действия',
          field: 'action',
          sortable: false,
        },
      ],
      rows: [
        {
          id:1,
          name: 'Отработанное масло',
          code: 'N1300200',
          state: 'Твердые',
          index: 'AC030',
          limit: '120',
          limitkzt: '15000',
        },
        {
          id:2,
          name: 'Отработанные аккумуляторы',
          code: 'N200500',
          state: 'Твердые',
          index: 'AA170',
          limit: '100',
          limitkzt: '50000',
        },
        {
          id:3,
          name: 'Нефтешлам',
          code: 'N150300',
          state: 'Пастообразные',
          index: 'AE030',
          limit: '80',
          limitkzt: '25000',
        },
        {
          id:4,
          name: 'Электроды',
          code: 'N200104',
          state: 'Твердые',
          index: 'AC030',
          limit: '150',
          limitkzt: '15000',
        }
      ],
      paginationOptions: {
        enabled: true,
        mode: 'pages',
        perPage: 5,
        position: 'bottom',
        perPageDropdown: [5, 10, 20],
        dropdownAllowAll: false,
        setCurrentPage: 1,
        nextLabel: '>',
        prevLabel: '<',
        rowsPerPageLabel: 'Строк на странице',
        ofLabel: '/',
        pageLabel: 'стр.', // for 'pages' mode
        allLabel: 'Все',
      },
    }
  },
  components:{
    VueGoodTable
  }
}
</script>

<style scoped>

</style>
