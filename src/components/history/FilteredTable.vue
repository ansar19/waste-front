<template>
  <div>
    <vue-good-table :columns="columns" :rows="records" :search-options="{ enabled: true, placeholder: 'Введите текст для поиска' }"
                    :pagination-options="paginationOptions">
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'action'">
          <button class="btn-sm btn-info" @click="$router.push('/detail/' + props.row.id)">
            <i class="material-icons">open_in_new</i>
          </button>
        </span>
      </template>
    </vue-good-table>
  </div>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';
export default {
  data() {
    return {

      columns: [
        {
          label: 'Объем, т',
          field: 'amount',
        },
        {
          label: 'Дата вывоза',
          field: 'removalDate',
          type: "date",
          dateInputFormat: "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          dateOutputFormat: "dd-MM-yyyy",
        },
        {
          label: 'Название',
          field: 'categoryName',
        },
        {
          label: 'Уровень опасности',
          field: 'wasteColor'
        },
        {
          label: 'Вид отхода',
          field: 'wasteType'
        },
        {
          label: 'Место вывоза',
          field: 'siteName',
        },
        {
          label: 'Название перевозчика',
          field: 'transporterName',
        },
        {
          label: 'Название места утилизации',
          field: 'utilizatorName',
        },
        {
          label: 'РОП?',
          field: 'type',
        },
        {
          label: 'Тип',
          field: 'typeText',

        },
        {
          label: 'Действия',
          field: 'action',
        }
      ],
      records: [
         {
           "recordId": "-M1uZcMNr6MT_ODRykAc",
          "amount" : 3,
          "categoryId" : "-M1pyJIRblItfvuQVplG",
          "date" : "2020-03-08T14:35:29.723Z",
          "categoryName" : "Твердые бытовые (коммунальные) отходы",
          "wasteColor" : "Янтарный",
           "wasteType" : "нефтешламы",
           "siteName" : "Баутино",
           "removalDate" : "2020-03-10T18:00:00.000Z",
          "transporterName" : "ТОО \"Перевозчик ТБО\"",
          "type" : "",
           "typeText" : "Вывезено",
          "utilizatorName" : "ТОО \"Котельная №2\"",
          "utilizatorId" : "-M1uDaVMTiI6nEGcPAl7"
        },
        {
          "recordId" : "-M1uxAxnQFODjekR0PLy",
          "amount" : 2,
          "categoryId" : "-M1jfloeUXksbH8T8x9q",
          "date" : "2020-03-08T16:22:47.013Z",
          "categoryName" : "Отходы лакокрасочных материалов",
          "wasteColor" : "Зеленый",
          "wasteType" : "прочие опасные отходы зеленого уровня",
          "siteName" : "Карабатан",
          "removalDate" : "2020-03-10T18:00:00.000Z",
          "transporterName" : "ТОО \"Перевозчик опасных отходов\"",
          "type" : "",
          "typeText" : "Вывезено",
          "utilizatorName" : "ТОО \"Цех переработки пластмасс\"",
          "utilizatorId" : "-M1uDnMsWSs-m-V6zajm"
        },
        {
          "recordId": "-M1uxcONNf46t0SqHQaq",
          "amount" : 12,
          "categoryId" : "-M1jWBNWLIdx3aC7HLmC",
          "date" : "2020-03-08T16:24:43.461Z",
          "categoryName" : "Отработанное масло",
          "wasteColor" : "Не применимо",
          "wasteType" : "отходы лаков и красок",
          "siteName" : "База Костанай",
          "removalDate" : "2020-03-10T18:00:00.000Z",
          "transporterName" : "ТОО \"Нефтетранс\"",
          "type" : "",
          "typeText" : "Вывезено",
          "utilizatorName" : "ГКП \"Полигон ТБО\"",
          "utilizatorId" : "-M1uxNO0XFoPIg1mmrGS"
        },
        {
          "recordId": "-M1uZcMNr6MT_ODRykAc",
          "amount" : 3,
          "categoryId" : "-M1pyJIRblItfvuQVplG",
          "date" : "2020-03-08T14:35:29.723Z",
          "categoryName" : "Твердые бытовые (коммунальные) отходы",
          "wasteColor" : "Янтарный",
          "wasteType" : "нефтешламы",
          "siteName" : "Баутино",
          "removalDate" : "2020-03-10T18:00:00.000Z",
          "transporterName" : "ТОО \"Перевозчик ТБО\"",
          "type" : "",
          "typeText" : "Вывезено",
          "utilizatorName" : "ТОО \"Котельная №2\"",
          "utilizatorId" : "-M1uDaVMTiI6nEGcPAl7"
        },
        {
          "recordId" : "-M1uxAxnQFODjekR0PLy",
          "amount" : 2,
          "categoryId" : "-M1jfloeUXksbH8T8x9q",
          "date" : "2020-03-08T16:22:47.013Z",
          "categoryName" : "Отходы лакокрасочных материалов",
          "wasteColor" : "Зеленый",
          "wasteType" : "прочие опасные отходы зеленого уровня",
          "siteName" : "Карабатан",
          "removalDate" : "2020-03-10T18:00:00.000Z",
          "transporterName" : "ТОО \"Перевозчик опасных отходов\"",
          "type" : "",
          "typeText" : "Вывезено",
          "utilizatorName" : "ТОО \"Цех переработки пластмасс\"",
          "utilizatorId" : "-M1uDnMsWSs-m-V6zajm"
        },
        {
          "recordId": "-M1uxcONNf46t0SqHQaq",
          "amount" : 12,
          "categoryId" : "-M1jWBNWLIdx3aC7HLmC",
          "date" : "2020-03-08T16:24:43.461Z",
          "categoryName" : "Отработанное масло",
          "wasteColor" : "Не применимо",
          "wasteType" : "отходы лаков и красок",
          "siteName" : "База Костанай",
          "removalDate" : "2020-03-10T18:00:00.000Z",
          "transporterName" : "ТОО \"Нефтетранс\"",
          "type" : "",
          "typeText" : "Вывезено",
          "utilizatorName" : "ГКП \"Полигон ТБО\"",
          "utilizatorId" : "-M1uxNO0XFoPIg1mmrGS"
        },
        {
          "recordId": "-M1uZcMNr6MT_ODRykAc",
          "amount" : 3,
          "categoryId" : "-M1pyJIRblItfvuQVplG",
          "date" : "2020-03-08T14:35:29.723Z",
          "categoryName" : "Твердые бытовые (коммунальные) отходы",
          "wasteColor" : "Янтарный",
          "wasteType" : "нефтешламы",
          "siteName" : "Баутино",
          "removalDate" : "2020-03-10T18:00:00.000Z",
          "transporterName" : "ТОО \"Перевозчик ТБО\"",
          "type" : "",
          "typeText" : "Вывезено",
          "utilizatorName" : "ТОО \"Котельная №2\"",
          "utilizatorId" : "-M1uDaVMTiI6nEGcPAl7"
        },
        {
          "recordId" : "-M1uxAxnQFODjekR0PLy",
          "amount" : 2,
          "categoryId" : "-M1jfloeUXksbH8T8x9q",
          "date" : "2020-03-08T16:22:47.013Z",
          "categoryName" : "Отходы лакокрасочных материалов",
          "wasteColor" : "Зеленый",
          "wasteType" : "прочие опасные отходы зеленого уровня",
          "siteName" : "Карабатан",
          "removalDate" : "2020-03-10T18:00:00.000Z",
          "transporterName" : "ТОО \"Перевозчик опасных отходов\"",
          "type" : "",
          "typeText" : "Вывезено",
          "utilizatorName" : "ТОО \"Цех переработки пластмасс\"",
          "utilizatorId" : "-M1uDnMsWSs-m-V6zajm"
        },
        {
          "recordId": "-M1uxcONNf46t0SqHQaq",
          "amount" : 12,
          "categoryId" : "-M1jWBNWLIdx3aC7HLmC",
          "date" : "2020-03-08T16:24:43.461Z",
          "categoryName" : "Отработанное масло",
          "wasteColor" : "Не применимо",
          "wasteType" : "отходы лаков и красок",
          "siteName" : "База Костанай",
          "removalDate" : "2020-03-10T18:00:00.000Z",
          "transporterName" : "ТОО \"Нефтетранс\"",
          "type" : "",
          "typeText" : "Вывезено",
          "utilizatorName" : "ГКП \"Полигон ТБО\"",
          "utilizatorId" : "-M1uxNO0XFoPIg1mmrGS"
        }
    ],
      paginationOptions: {
        enabled: true,
        mode: 'records',
        perPage: 5,
        position: 'bottom',
        dropdownAllowAll: true,
        setCurrentPage: 1,
        nextLabel: '>',
        prevLabel: '<',
        rowsPerPageLabel: 'Строк на странице',
        ofLabel: '/',
        pageLabel: 'стр.', // for 'pages' mode
        allLabel: 'Все'
      },
    }
  },

  components: {
    VueGoodTable,
  }
}
</script>
