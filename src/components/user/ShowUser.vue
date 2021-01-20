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
                <th class="text-left">Фамилия:</th>
                <td>{{ user.surname }}</td>
              </tr>
              <tr>
                <th class="text-left">Имя:</th>
                <td>{{ user.name }}</td>
              </tr>
              <tr>
                <th class="text-left">Отчество:</th>
                <td>{{ user.middle_name }}</td>
              </tr>
              <tr>
                <th class="text-left">Должность:</th>
                <td>{{ user.position }}</td>
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
  name: 'ShowUser',
  data() {
    return {
      user: {
        id: 1,
        name: 'Иван',
        surname: 'Иванович',
        middle_name: 'Петрович',
        position: 'Бригадир',
        createdAt: '2011-10-22',
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
