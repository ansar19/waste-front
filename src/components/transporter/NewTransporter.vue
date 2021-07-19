<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <d-card class="card-small">
          <ValidationObserver v-slot="{handleSubmit}">
            <form @submit.prevent="handleSubmit(onSubmit)">
            <!-- Form Example -->
            <d-card-header class="border-bottom">
              <h6 class="m-0">Новый перевозчик</h6>
            </d-card-header>

            <div class="col s12 m6 mt-2">
              <div>

                  <div class="from-group">
                    <label for="title-transporter">Наименование перевозчика</label>
                    <ValidationProvider name="title-transporter" rules="nullInput" v-slot="{errors,classes}" >
                      <input id="title-transporter"
                             type="text"
                             v-model="title"
                             class="form-control form-control-input"
                             :class="classes"
                      >
                      <span class="null_error">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>

                  <div class="from-group">
                    <label for="transporter-phone">Контактный номер перевозчика</label>
                    <ValidationProvider name="transporter-phone" rules="nullInput" v-slot="{errors,classes}" >
                      <input id="transporter-phone"
                             type="text"
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
                                :class="classes"/>
                      <span class="null_error">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>

                  <button class="btn btn-success waves-effect waves-light mb-4" type="submit">
                    Создать
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
    title: '',
    transporterPhone: '',
    transporterBankDetail: ''
  }),
  validations: {
    title: {  },
    transporterPhone: {  }
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
</style>
