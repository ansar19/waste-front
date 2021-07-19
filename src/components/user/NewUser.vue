<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <d-card class="card-small">
          <ValidationObserver v-slot="{handleSubmit}">
            <form @submit.prevent="handleSubmit(onSubmit)">
              <!-- Form Example -->
              <d-card-header class="border-bottom">
                <h6 class="m-0">Новый пользователь</h6>
              </d-card-header>
              <d-card-body>
                <d-list-group flush>
                  <d-list-group-item class="p-3">
                    <d-row>
                      <d-col>
                        <d-form>
                              <div class="form-group">
                                <label for="user-name">Имя пользователя: </label>
                                <ValidationProvider name="Name" rules="nullInput" v-slot="{errors,classes}" >
                                  <d-input
                                    id="user-name"
                                    placeholder="Иван Иванов"
                                    v-model="formData.username"
                                    :class="classes"
                                  />
                                  <span class="null_error">{{ errors[0] }}</span>
                                </ValidationProvider>
                              </div>
                          <div class="form-group">
                            <label for="created-at">Зарегистрирован: </label>
                            <ValidationProvider name="Date" rules="nullInput" v-slot="{errors,classes}" >
                              <d-input
                                id="created-at"
                                placeholder="2011-01-01"
                                v-model="formData.createdAt"
                                :class="classes"
                                type="date"
                              />
                              <span class="null_error">{{ errors[0] }}</span>
                            </ValidationProvider>
                          </div>
                        </d-form>
                      </d-col>
                    </d-row>
                  </d-list-group-item>
                </d-list-group>
              </d-card-body>
              <d-card-footer class="border-top">
                <div class="d-flex">
                  <router-link to="/users">Отменить</router-link>
                  <button class="btn btn-success ml-auto" type="submit" @click="onSubmit">
                    Сохранить
                  </button>
                </div>
              </d-card-footer>
            </form>
          </ValidationObserver>
        </d-card>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
import {ValidationProvider, extend} from 'vee-validate/dist/vee-validate.full';
import {configure} from 'vee-validate';

extend('nullInput', {
  validate(value) {
    return {
      required: true,
      valid: ['', null, undefined].indexOf(value) === -1,
    };
  },
  computesRequired: true,
  message: " * Oбязательное поле"

});
export default {
  data: () => ({
    formData: {
      username: '',
      createdAt: '',
    }

  }),
  methods: {
    onSubmit(){
      console.log(this.formData);
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.invalid{
  border: 1px solid red;
}
.null_error{
  color: red;
}
</style>
