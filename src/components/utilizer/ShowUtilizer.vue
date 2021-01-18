<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <div class="card card-small mb-4 pt-3">
          <div class="card-header border-bottom text-center">
            <div class="mb-3 mx-auto"></div>
            <!-- vertical table head example -->
            <table
              v-for="(u, index) in utilizers"
              :key="index"
              class="table table-bordered"
              style="width: 100%"
            >
              <tr>
                <th class="text-left">Наименование места утилизации:</th>
                <td>{{ u.utilizerName }}</td>
              </tr>
              <!-- <tr>
          <th class="text-left">Email:</th>
          <td>{{ u.email }}</td>
        </tr>
        <tr>
          <th class="text-left">Телефон:</th>
          <td>{{ u.phone }}</td>
        </tr>
        <tr>
          <th class="text-left">Должность:</th>
          <td>{{ u.position }}</td>
        </tr>
        <tr>
          <th class="text-left">Био:</th>
          <td>{{ u.bio }}</td>
        </tr> -->
            </table>
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
  name: 'show-utilizer',
  data() {
    return {
      utilizers: [
        {
          utilizerName: 'Место утилизации',
          position: 'Старший эколог',
          bio: 'Закончила КазГУ им. Аль-Фараби, географ - эколог',
          email: 'ekatya2015@mail.ru',
          location: 'ул. Радужная, д. 28',
          phone: '+7702 234 567 80',
          accNumber: '123456789',
        },
      ],
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>