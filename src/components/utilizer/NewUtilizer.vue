<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <d-card class="card-small">
          <!-- Form Example -->
          <d-card-header class="border-bottom">
            <h6 class="m-0">Новое место утилизации отходов</h6>
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

                    <div class="card-footer text-muted">
                      <d-card-footer>
                        <div class="d-flex">
                          <a href="#" @click="goBack()" class="stretched-link"
                            >Отменить</a
                          >
                          <d-button
                            class="btn btn-success ml-auto"
                            type="submit"
                            >Сохранить</d-button
                          >
                        </div>
                      </d-card-footer>
                    </div>
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
      utilizePlaceName: '',
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
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>