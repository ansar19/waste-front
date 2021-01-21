<template>
  <div class="container-fluid px-4 pb-4">
    <div class="row">
      <div class="col-12 md-12">
        <div class="card-small">
          <div class="card-header border-bottom">
            <h5 class="m-0">Изменить : </h5>
          </div>

          <div class="row ">
            <div class="col ">
              <div class="form m-3">
                <div class="form-group">
                  <label for="site-name">Название участка : </label>
                  <input id="site-name" class="form-control" placeholder="Введите название участка" v-model="siteName"/>
                </div>

                <div class="form-group">
                  <label for="site-comments">Коментарии : </label>
                  <input type="text" id="site-comments" class="form-control" placeholder="Введите комментарии" v-model="siteComments"/>
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
  name: 'NewSite',
  data() {
    return {
      siteName: 'Казахстан',
      siteComments: 'Мангистау',
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
