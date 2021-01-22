<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <d-card class="card-small">
          <!-- Form Example -->
          <d-card-header class="border-bottom">
            <h6 class="m-0">Редактировать место утилизации отходов</h6>
          </d-card-header>

          <d-list-group flush>
            <d-list-group-item class="p-3">
              <d-row>
                <d-col>
                  <d-form>
                    <div class="form-group">
                      <label for="utilizer-name"
                        >Наименование места утилизации</label
                      >
                      <d-input
                        id="utilizer-name"
                        placeholder="Введите название места утилиизации"
                        v-model="utilizePlaceName"
                      />
                    </div>

                    <!-- vue - select -->
                    <div class="form-group">
                      <label for="v-select">Тип места утилизации</label>
                      <v-select
                        id="v-select"
                        label="utilizeTypeName"
                        v-model="utilizeType"
                        :options="utilizeTypeOptions"
                      ></v-select>
                      {{ utilizeTypeName }}
                    </div>
                    <!-- / vue - select -->
                  </d-form>
                </d-col>
              </d-row>
            </d-list-group-item>
          </d-list-group>
          <d-card-footer class="border-top">
            <div class="d-flex">
              <router-link to="/utilizers">Отменить</router-link>
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
      utilizePlaceName: 'Полигон ТБО',
      utilizeType: '',
      utilizeTypeOptions: [
        {
          utilizeTypeCode: 'externalUtilization',
          utilizeTypeName: 'Внешняя утилизация',
        },
        {
          utilizeTypeCode: 'internalUtilization',
          utilizeTypeName: 'Внутренняя утилизация',
        },
      ],
    };
  },
};
</script>