<template>
  <d-card class="card-small mb-4">
    <!-- Card Header -->
    <d-card-header class="border-bottom">
      <h6 class="m-0">{{ title }}</h6>
    </d-card-header>

    <d-list-group flush>
      <d-list-group-item class="p-3">
        <d-row>
          <d-col>
            <d-form class="new-user" @submit="saveEmployee" validate>
              <d-row>
                <d-col cols="12" md="6" lg="6">
                  <div class="form-group">
                    <label for="userEmail">Email:</label>
                    <input name="userEmail" class="mb-2 mr-sm-2 mb-sm-0 form-control" v-model="users.userEmail"
                      v-validate="{ required: true, email: true }" data-vv-as="Email Пользователя"
                      placeholder="email@example.com">
                    <d-form-valid-feedback>Выглядит хорошо!</d-form-valid-feedback>
                    <!-- <d-form-invalid-feedback>{{ errorBags.first('userEmail') }}</d-form-invalid-feedback> -->
                    <small class="form-text text-muted">Мы никогда не передадим вашу электронную почту кому-либо еще.</small>
                  </div>
                </d-col>
                <d-col cols="12" md="6" lg="6">
                  <label>Телефон:</label>
                  <d-input-group prepend="+7" class="mb-3">
                    <d-input placeholder="7777019988" id="phoneNumber" v-model="users.userPhone" />
                  </d-input-group>
                </d-col>
              </d-row>

              <d-row>
                <d-col cols="12" md="4" lg="4">
                  <div class="form-group">
                    <label for="userSurename">Фамилия</label>
                    <input name="userSurename" class="mb-2 mr-sm-2 mb-sm-0 form-control" v-model="users.surename"
                      v-validate="'required|min:2'" data-vv-as="Фамилия Пользователя"
                      placeholder="Введите Фамилию">
                    <d-form-valid-feedback>Выглядит хорошо!</d-form-valid-feedback>
                    <!-- <d-form-invalid-feedback>{{ errorBags.first('userSurename') }}</d-form-invalid-feedback> -->
                    <small class="form-text text-muted">Мы никогда не передадим вашу электронную почту кому-либо еще.</small>
                  </div>
                </d-col>
                <d-col cols="12" md="4" lg="4">
                  <label>Имя:</label>
                  <input class="mb-3 form-control" type="text" id="user_name" v-model="users.firstname"
                    v-validate="'required|min:2'" data-vv-as="Имя Пользователя" name="firstname"
                    placeholder="Введите Имя пользователя" />
                  <d-form-valid-feedback>Выглядит хорошо!</d-form-valid-feedback>
                  <!-- <d-form-invalid-feedback>{{ errorBags.first("firstname") }}.</d-form-invalid-feedback> -->
                </d-col>
                <d-col cols="12" md="4" lg="4">
                  <label>Отчество:</label>
                  <input class="mb-3 form-control" type="text" id="user_patronymic" v-model="users.patronymic"
                    name="user_patronymic"
                    placeholder="Введите Отчество пользователя">
                </d-col>
              </d-row>

              <d-row>
                <d-col cols="12" md="6" lg="8">
                  <label>Должность:</label>
                  <input class="mb-3 form-control" type="text" id="position" v-model="users.position"
                    placeholder="Введите должность" />
                </d-col>
                <d-col cols="12" md="6" lg="4">
                  <div class="form-group">
                    <label>Подразделение:</label>
                    <input class="mb-3 form-control" type="text" id="department" v-model="users.department"
                    placeholder="Введите Подразделение" />
                  </div>
                </d-col>
              </d-row>

              <div>
                <label class="d-block">Роли сотрудника в системе</label>
                <d-checkbox inline name="role" v-model="users.roles" value="company_admin">Администратор компании</d-checkbox>
                <d-checkbox inline name="role" v-model="users.roles" value="reporter">Ответственный за предоставление данных</d-checkbox>
                <d-checkbox inline name="role" v-model="users.roles" value="super_admin">Супер Администратор</d-checkbox>
              </div>

            </d-form>
          </d-col>
        </d-row>
      </d-list-group-item>
    </d-list-group>
    <d-card-footer class="border-top">
      <div class="d-flex">
        <router-link to="/users">Отменить</router-link>
        <button class="btn btn-success ml-auto" @click.prevent="saveEmployee"
          type="submit">Сохранить</button>
      </div>
    </d-card-footer>
  </d-card>
</template>

<script>
export default {
  name: 'user-account-details',
  props: {
    /**
     * The component title.
     */
    title: {
      type: String,
      default: 'Пользователь',
    },
  },
  data() {
    return {
      payload: {},
      users: {
        firstname: '',
        surename: '',
        patronymic: '',
        userEmail: '',
        userPhone: '',
        position: '',
        department: '',
        roles: [],
      },
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  }
};
</script>