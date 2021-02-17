<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <d-card class="card-small">
          <!-- Form Example -->
          <d-card-header class="border-bottom">
            <h6 class="m-0">Редактировать место утилизации отходов
            </h6>
          </d-card-header>
          <div class="col s12 m6 mt-2">
            <div>
              <form @submit.prevent="submitHandler">
                <div class="form-group">
                  <label>Выберите место утилизации</label>
                  <select ref="select3" v-model="current" class="form-control form-control-input">
                    <option class="form-option" v-for="(title, id) in utilizators">{{title.title}}</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="name">Наименование места утилизации</label>
                  <input id="name" type="text" v-model="title" class="form-control form-control-input">
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
  props: {

  },
  data: () => ({
    select3: null,
    title: 'ГКП "Полигон ТБО"',
    utilizatorPhone: '+77787787878',
    utilizatorBankDetail: 'АО "Каспий банк"',
    current: null,
    utilizators: [
      {
        id: 1,
        title: 'ГКП "Полигон ТБО"'
      },
      {
        id: 2,
        title: 'ТОО "Цех переработки пластмасс"'
      },
      {
        id: 3,
        title: 'ТОО "Котельная №2"'
      },
      {
        id: 4,
        title: 'АО "Аккумуляторный завод"'
      }
    ]
  }),
  validations: {
    title: {  },
    utilizatorPhone : {  }
  },
  watch: {
    current(utilId) {
      const { title, utilizatorPhone, utilizatorBankDetail } = this.utilizators.find(u => u.id === utilId)
      this.title = title,
        this.utilizatorPhone = utilizatorPhone,
        this.utilizatorBankDetail = utilizatorBankDetail
    }
  },
  // created() {
  //   const { id, title, utilizatorPhone, utilizatorBankDetail } = this.utilizators[0]
  //   this.current = id
  //   this.title = title
  //   this.utilizatorPhone = utilizatorPhone,
  //     this.utilizatorBankDetail
  // },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      try {
        const utilizatorData = {
          id: this.current,
          title: this.title,
          utilizatorPhone: this.utilizatorPhone,
          utilizatorBankDetail: this.utilizatorBankDetail
        }
        await this.$store.dispatch('updateUtilizator', utilizatorData)
        this.$message(localizeFilter('Utilizator_HasBeenUpdated'))
        this.$emit('updated', utilizatorData)
      } catch (e) {}
    }
  },
  // mounted() {
  //   this.select3 = M.FormSelect.init(this.$refs.select3)
  //   M.updateTextFields()
  // },
  destroyed() {
    if (this.select3 && this.select3.destroy) {
      this.select3.destroy()
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


