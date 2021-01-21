<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <div class="card card-small mb-4 pt-3">
          <div class="card-header border-bottom text-center">
            <div class="mb-3 mx-auto"></div>
            <!-- vertical table head example -->
            <table class="table table-bordered" style="width: 100%">
              <tr>
                <th class="text-left">Дата вывоза/принятия:</th>
                <td>{{ user.removalDate }}</td>
              </tr>
              <tr>
                <th class="text-left">Наименование отхода:</th>
                <td>{{ user.wasteName }}</td>
              </tr>
              <tr>
                <th class="text-left">Масса, тонн:</th>
                <td>{{ user.wasteQty }}</td>
              </tr>
              <tr>
                <th class="text-left">Описание:</th>
                <td>{{ user.wasteDescription }}</td>
              </tr>

              <tr>
                <th class="text-left">Наименование компании:</th>
                <td>{{ user.companyName }}</td>
              </tr>
              <tr>
                <th class="text-left">Наименование перевозчика:</th>
                <td>{{ user.transporterName }}</td>
              </tr>
              <tr>
                <th class="text-left">Наименование места утилизации:</th>
                <td>{{ user.utilizerName }}</td>
              </tr>
            </table>
            <strong class="text-muted d-block mb-2"
              >Больше деталей в файле для выгрузки</strong
            >
          </div>
          <div class="card-footer text-muted">
            <d-button @click="goBack()" pill>
              <a class="text-white"> &larr; Вернуться назад </a>
            </d-button>
          </div>
        </div>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
export default {
  name: 'ShowUser',
  data() {
    return {
      user: {
        id: 1,
        removalDate: '08 марта 2020 г., 20:35:29',
        wasteName: 'Твердые бытовые (коммунальные) отходы',
        wasteQty: '3',
        wasteDescription: '3 тонны',
        companyName: 'ТОО "Производственная компания"',
        transporterName: 'ТОО "Перевозчик ТБО"',
        utilizerName: 'ГКП "Полигон ТБО"',
      },
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
