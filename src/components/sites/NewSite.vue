<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <d-card class="card-small">
          <!-- Form Example -->
          <d-card-header class="border-bottom">
            <h6 class="m-0">Новый участок</h6>
          </d-card-header>
          <d-card-body>
            <d-list-group flush>
              <d-list-group-item class="p-3">
                <d-row>
                  <d-col>
                    <d-form>
                      <div class="form-group">
                        <label for="site-name">Наименование участка: </label>
                        <d-input
                          id="site-name"
                          placeholder="Введите название участка"
                          v-model="siteName"
                        />
                      </div>
                      <div class="form-group">
                        <label for="site-comments">Комментарии: </label>
                        <d-input
                          id="site-comments"
                          placeholder="Введите комментарии"
                          v-model="siteComments"
                        />
                      </div>
                    </d-form>
                  </d-col>
                </d-row>
              </d-list-group-item>
            </d-list-group>
          </d-card-body>
          <d-card-footer class="border-top">
            <div class="d-flex">
              <router-link to="/sites">Отменить</router-link>
              <button class="btn btn-success ml-auto" type="submit">
                Сохранить
              </button>
            </div>
          </d-card-footer>
        </d-card>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
export default {
  data() {
    return {
      siteName: '',
      siteComments: '',
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
