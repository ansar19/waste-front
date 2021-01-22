<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <d-card class="card-small">
          <!-- Form Example -->
          <d-card-header class="border-bottom">
            <h6 class="m-0">Редактировать перевозчика</h6>
          </d-card-header>
          <d-card-body>
            <d-list-group flush>
              <d-list-group-item class="p-3">
                <d-row>
                  <d-col>
                    <d-form>
                      <div class="form-group">
                        <label for="transporter-name"
                          >Наименование перевозчика</label
                        >
                        <d-input
                          id="transporter-name"
                          placeholder="Введите название места утилиизации"
                          v-model="transporterName"
                        />
                      </div>

                      <!-- vue - select -->
                      <div class="form-group">
                        <label for="v-select">Тип перевозчика</label>
                        <v-select
                          id="v-select"
                          label="transporterName"
                          v-model="transporterType"
                          :options="transporterTypeOptions"
                        ></v-select>
                        {{ transporterName }}
                      </div>
                      <!-- / vue - select -->
                    </d-form>
                  </d-col>
                </d-row>
              </d-list-group-item>
            </d-list-group>
          </d-card-body>
          <div class="card-footer border-top">
            <div class="d-flex">
              <router-link to="/transporters">Отменить</router-link>
              <button class="btn btn-success ml-auto" type="submit">
                Сохранить
              </button>
            </div>
          </div>
        </d-card>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
export default {
  data() {
    return {
      transporterName: 'Перевозчик опасныхх отходов',
      transporterType: '',
      transporterTypeOptions: [
        {
          transporterTypeCode: 'externalUtilization',
          transporterTypeName: 'Внешняя утилизация',
        },
        {
          transporterTypeCode: 'internalUtilization',
          transporterTypeName: 'Внутренняя утилизация',
        },
      ],
    };
  },
};
</script>