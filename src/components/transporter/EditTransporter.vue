<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <d-card class="card-small">
          <!-- Form Example -->
          <d-card-header class="border-bottom">
            <h6 class="m-0">Редактировать перевозчика
            </h6>
          </d-card-header>

          <div class="col s12 m6 mt-2">
            <div>
              <form @submit.prevent="submitHandler">
                <div class="form-group">
                  <label>Выберите перевозчика</label>
                  <select ref="select2" v-model="current" class="form-control form-control-input">
                    <option class="form-option" v-for="(title, id) in transporters">{{title.title}}</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="name">Наименование перевозчика</label>
                  <input id="name" type="text" v-model="title" class="form-control form-control-input">
                </div>

                <div class="from-group">
                  <label for="phone">Контактный номер перевозчика</label>
                  <input id="phone" type="text" v-model="transporterPhone" class="form-control form-control-input">
                </div>

                <div class="form-group">
                  <label for="transporter-bank-details">Банковские детали перевозчика</label>
                  <textarea id="transporter-bank-details" type="textarea" v-model="transporterBankDetail"
                            class="form-control">
          </textarea>
                </div>


                <button class="btn btn-success waves-effect waves-light mb-3" type="submit">
                 Обновить
                  <i class="material-icons right">send</i>
                </button>
              </form>
            </div>
          </div>
          <div class="card-footer border-top mb">

          </div>
        </d-card>
      </d-col>
    </d-row>
  </d-container>

</template>

<script>
import localizeFilter from '@/filters/localize.filter'
export default {
  data: () => ({
    select2: null,
    title: '',
    transporterPhone: '',
    transporterBankDetail: '',
    current: null,
    transporters: [
      {
        id: 1,
        title: 'ТОО "Перевозчик ТБО"',
      },
      {
        id: 2,
        title: 'ТОО "Перевозчик опасных отходов"',

      },
      {
        id: 3,
        title: 'ИП «Меркурий»',
      },
    ]
  }),
  validations: {
    title: {  },
    transporterPhone : {  }
  },
  watch: {
    current(transpId) {
      const { title, transporterPhone, transporterBankDetail } = this.transporters.find(t => t.id === transpId)
      this.title = title,
        this.transporterPhone = transporterPhone,
        this.transporterBankDetail = transporterBankDetail
    }
  },
  // created() {
  //   const { id, title, transporterPhone } = this.transporters[id]
  //   this.current = id
  //   this.title = title
  //   this.transporterPhone = transporterPhone,
  //     this.transporterBankDetail
  // },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      try {
        const transporterData = {
          id: this.current,
          title: this.title,
          transporterPhone: this.transporterPhone,
          transporterBankDetail: this.transporterBankDetail
        }
        await this.$store.dispatch('updateTransporter', transporterData)
        this.$message(localizeFilter('Transporter_HasBeenUpdated'))
        this.$emit('updated', transporterData)
      } catch (e) {}
    }
  },
  // mounted() {
  //   this.select2 = M.FormSelect.init(this.$refs.select2)
  //   M.updateTextFields()
  // },
  destroyed() {
    if (this.select2 && this.select2.destroy) {
      this.select2.destroy()
    }
  }
}
</script>

<style scoped>
.form-control-input{
  border: none;
  border-radius: 0;
  background-color: transparent;
  border-bottom: 1px solid #9e9e9e;
  margin-bottom: 10px;
}
.form-control-input:focus {
  border-bottom: 1px solid #26a69a;
  box-shadow: 0 1px 0 0 #26a69a;
}
label{
  font-size: .8rem;
  color: #9e9e9e;
}
.form-option{
  font-size: 16px;
  color: #26a69a;
  display: block;
  line-height: 22px;
  padding: 14px 16px;
}
</style>
