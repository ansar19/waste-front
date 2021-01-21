<template>
  <div class="container-fluid px-4 pb-4">
    <div class="row">
      <div class="col-12 md-12">
        <div class="card-small">
          <div class="card-header border-bottom">
            <h5 class="m-0">Переименовать</h5>
          </div>

          <div class="row ">
            <div class="col ">
              <div class="form m-3">
                <div class="form-group">
                  <label for="user-name">Имя пользователя: </label>
                  <input id="user-name" class="form-control" placeholder="" v-model="userName"/>
                </div>

                <div class="form-group">
                  <label for="user-comments">Должность :</label>
                  <input type="text" id="user-comments" class="form-control" placeholder="" v-model="userComments"/>
                </div>
              </div>
              <div class="card-footer text-muted">
                <div>
                  <div class="d-flex">
                    <button @click="goBack" class="btn btn-outline">Отменить</button>
                    <button class="btn btn-success ml-auto" type="submit">Сохранить</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditUser',
  data() {
    return {
      userName: 'Иван Иванов',
      userComments: 'Директор',
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>

</style>
