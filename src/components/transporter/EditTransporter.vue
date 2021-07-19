<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <d-card class="card-small">
          <ValidationObserver v-slot="{handleSubmit}">
            <form @submit.prevent="handleSubmit(onSubmit)">
          <!-- Form Example -->
            <d-card-header class="border-bottom">
              <h6 class="m-0">Редактировать перевозчика
              </h6>
            </d-card-header>

            <div class="col s12 m6 mt-2">
              <div>
                  <div class="form-group">
                    <label>Выберите перевозчика</label>
                    <ValidationProvider name="transporter" rules="nullInput" v-slot="{errors,classes}" >
                      <select ref="select2" v-model="current" class="form-control form-control-input"  :class="classes">
                        <option class="form-option" v-for="(title, id) in transporters">{{title.title}}</option>
                      </select>
                      <span class="null_error">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>

                  <div class="form-group">
                    <label for="name">Наименование перевозчика</label>
                    <ValidationProvider name="name-transporter" rules="nullInput" v-slot="{errors,classes}" >
                      <input id="name"
                             type="text"
                             v-model="title"
                             class="form-control form-control-input"
                             :class="classes"
                      >
                      <span class="null_error">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>

                  <div class="from-group">
                    <label for="phone">Контактный номер перевозчика</label>
                    <ValidationProvider name="phone-transporter" rules="nullInput" v-slot="{errors,classes}" >
                      <input id="phone"
                             type="tel"
                             v-model="transporterPhone"
                             class="form-control form-control-input"
                             :class="classes"
                      >
                      <span class="null_error">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>

                  <div class="form-group">
                    <label for="transporter-bank-details">Банковские детали перевозчика</label>
                    <ValidationProvider name="transporter-bank-details" rules="nullInput" v-slot="{errors,classes}" >
                      <textarea id="transporter-bank-details"
                                type="textarea"
                                v-model="transporterBankDetail"
                                class="form-control"
                                :class="classes">
                      </textarea>
                      <span class="null_error">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>


                  <button class="btn btn-success waves-effect waves-light mb-3" type="submit">
                   Обновить
                    <i class="material-icons right">send</i>
                  </button>

              </div>
            </div>
            <div class="card-footer border-top mb">

            </div>
            </form>
          </ValidationObserver>
        </d-card>
      </d-col>
    </d-row>
  </d-container>

</template>

<script>
import localizeFilter from '@/filters/localize.filter'
import {ValidationProvider, extend} from 'vee-validate/dist/vee-validate.full';
import {configure} from 'vee-validate';

extend('nullInput', {
  validate(value) {
    return {
      required: true,
      valid: ['', null, undefined].indexOf(value) === -1,
    };
  },
  computesRequired: true,
  message: " * Oбязательное поле"

});
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
  methods: {
    onSubmit(){
      console.log(this.formData);
    },
    goBack() {
      this.$router.go(-1);
    },
    // async submitHandler() {
    //   if (this.$v.$invalid) {
    //     this.$v.$touch()
    //     return
    //   }
    //
    //   try {
    //     const transporter = await this.$store.dispatch('createTransporter', {
    //       title: this.title,
    //       transporterPhone: this.transporterPhone,
    //       transporterBankDetail: this.transporterBankDetail
    //     })
    //     this.title = ''
    //     this.transporterPhone = ''
    //     this.transporterBankDetail = ''
    //     this.$v.$reset()
    //     this.$message(localizeFilter('Transporter_HasBeenCreated'))
    //     this.$emit('created', transporter)
    //   } catch (e) {}
    // }
  },
  // created() {
  //   const { id, title, transporterPhone } = this.transporters[id]
  //   this.current = id
  //   this.title = title
  //   this.transporterPhone = transporterPhone,
  //     this.transporterBankDetail
  // },
  // methods: {
  //   async submitHandler() {
  //     if (this.$v.$invalid) {
  //       this.$v.$touch()
  //       return
  //     }
  //
  //     try {
  //       const transporterData = {
  //         id: this.current,
  //         title: this.title,
  //         transporterPhone: this.transporterPhone,
  //         transporterBankDetail: this.transporterBankDetail
  //       }
  //       await this.$store.dispatch('updateTransporter', transporterData)
  //       this.$message(localizeFilter('Transporter_HasBeenUpdated'))
  //       this.$emit('updated', transporterData)
  //     } catch (e) {}
  //   }
  // },
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
.form-control-input.invalid {
  border-bottom: 1px solid red;
}
textarea.invalid{
  border: 1px solid red;
}
.null_error{
  color: red;
  font-weight: normal;
}
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
