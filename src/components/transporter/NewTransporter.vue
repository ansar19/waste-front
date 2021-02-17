<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <d-card class="card-small">
          <!-- Form Example -->
          <d-card-header class="border-bottom">
            <h6 class="m-0">Новый перевозчик</h6>
          </d-card-header>

          <div class="col s12 m6 mt-2">
            <div>
              <form @submit.prevent="submitHandler">
                <div class="from-group">
                  <label for="title-transporter">Наименование перевозчика</label>
                  <input id="title-transporter" type="text" v-model="title" class="form-control form-control-input">
                </div>

                <div class="from-group">
                  <label for="transporter-phone">Контактный номер перевозчика</label>
                  <input id="transporter-phone" type="text" v-model="transporterPhone" class="form-control form-control-input">
                </div>

                <div class="form-group">
                  <label for="transporter-bank-details">Банковские детали перевозчика</label>
                  <textarea id="transporter-bank-details" type="textarea" v-model="transporterBankDetail" class="form-control"></textarea>
                </div>

                <button class="btn btn-success waves-effect waves-light mb-4" type="submit">
                  Создать
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
    title: '',
    transporterPhone: '',
    transporterBankDetail: ''
  }),
  validations: {
    title: {  },
    transporterPhone: {  }
  },
  mounted() {
    M.updateTextFields()
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      try {
        const transporter = await this.$store.dispatch('createTransporter', {
          title: this.title,
          transporterPhone: this.transporterPhone,
          transporterBankDetail: this.transporterBankDetail
        })
        this.title = ''
        this.transporterPhone = ''
        this.transporterBankDetail = ''
        this.$v.$reset()
        this.$message(localizeFilter('Transporter_HasBeenCreated'))
        this.$emit('created', transporter)
      } catch (e) {}
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
</style>
