<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <d-card class="card-small">
          <!-- Form Example -->
          <d-card-header class="border-bottom">
            <h6 class="m-0">Редактировать </h6>
          </d-card-header>

          <d-list-group flush>
            <d-list-group-item class="p-3">
              <d-row>
                <d-col>
                  <d-form>
                    <div class="form-group">
                      <label for="user-name"
                        >Имя пользователя: </label
                      >
                      <d-input
                        id="user-name"
                        placeholder="Иван Иванов"
                        v-model="userName"
                      />
                    </div>
                    <div class="form-group">
                      <label for="created-at"
                        >Зарегистрирован: </label
                      >
                      <d-input
                        id="created-at"
                        placeholder="2011-01-01"
                        v-model="createdAt"
                      />
                    </div>

                   

                    <button type="button" class="btn btn-outline-success">
                      Сохранить
                    </button>
                  </d-form>
                </d-col>
              </d-row>
            </d-list-group-item>
          </d-list-group>
        </d-card>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
export default {
  data() {
    return {
      userName: 'Иван Иванов',
      createdAt: '2011-01-01',
    };
  },
};
</script>
