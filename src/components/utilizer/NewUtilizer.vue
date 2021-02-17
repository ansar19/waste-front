<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <d-card class="card-small">
          <!-- Form Example -->
          <d-card-header class="border-bottom">
            <h6 class="m-0">Новое место утилизации отходов</h6>
          </d-card-header>

          <div class="col s12 m6">
            <div>
              <form @submit.prevent="submitHandler">
                <div class="from-group">
                  <label for="name">Наименование места утилизации</label>
                  <input id="name" type="text" v-model="title"  class="form-control form-control-input">
                </div>

                <div class="from-group">
                  <label for="phone">Контактный номер места утилизации</label>
                  <input id="phone" type="text" v-model="utilizatorPhone" class="form-control form-control-input">
                </div>

                <div class="form-group">
                  <label for="utilizator-bank-details">Банковские детали места утилизации</label>
                  <textarea id="utilizator-bank-details" type="textarea" v-model="utilizatorBankDetail"
                            class="form-control">
          </textarea>
                </div>

                <button class="btn btn-success waves-effect waves-light mb-3" type="submit">
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
    utilizatorPhone: '',
    utilizatorBankDetail: ''
  }),
  validations: {
    title: {  },
    utilizatorPhone: {  }
  },
    // mounted() {
    //   M.updateTextFields()
    // },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      try {
        const utilizator = await this.$store.dispatch('createUtilizator', {
          title: this.title,
          utilizatorPhone: this.utilizatorPhone,
          utilizatorBankDetail: this.utilizatorBankDetail
        })
        this.title = ''
        this.utilizatorPhone = ''
        this.utilizatorBankDetail = ''
        this.$v.$reset()
        this.$message(localizeFilter('Utilizator_HasBeenCreated'))
        this.$emit('created', utilizator)
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
  margin-top: 10px;
}
</style>
