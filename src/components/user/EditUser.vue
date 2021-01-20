<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <d-card class="card-small">
          <!-- Form Example -->
          <d-card-header class="border-bottom">
            <h6 class="m-0">Редактировать пользователя</h6>
          </d-card-header>

          <d-list-group flush>
            <d-list-group-item class="p-3">
              <d-row>
                <d-col>
                  <d-form>
                    <div class="form-group">
                      <label>Имя:</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="username"
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div class="form-group">
                      <label>Должность:</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="role"
                        placeholder="Директор"
                      />
                    </div>
                    <button type="submit" class="btn btn-success">
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
  name: 'EditUser',
  data() {
    return {
      username: 'Иван Иванов',
      role: 'Директор',
    };
  },
};
</script>

<style scoped>
.container {
  margin: auto;
  width: 50%;
}
</style>
