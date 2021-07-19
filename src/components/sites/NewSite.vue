<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <d-card class="card-small">
          <ValidationObserver v-slot="{handleSubmit}">
            <form @submit.prevent="handleSubmit(onSubmit)">
          <!-- Form Example -->
            <d-card-header class="border-bottom">
              <h6 class="m-0">Новый участок
              </h6>
            </d-card-header>
            <div class="col s12 m6 mt-2">
              <div>


                  <div class="from-group">
                    <label for="name1">Наименование участка</label>
                    <ValidationProvider name="Name" rules="nullInput" v-slot="{errors,classes}" >
                      <input id="name1"
                             type="text"
                             v-model="formData.siteName"
                             :class="classes"
                             class="form-control form-control-input"
                      >
                      <span class="null_error">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>

                  <div class="form-group">
                    <label for="site-comments1">Комментарии к участку</label>
                    <ValidationProvider name="Comment" rules="nullInput" v-slot="{errors,classes}" >
                      <textarea id="site-comments1"
                                type="textarea"
                                v-model="formData.siteComments"
                                class="form-control"
                                :class="classes"
                      >
                      </textarea>
                      <span class="null_error">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>

                  <button class="btn btn-success waves-effect waves-light mb-3" type="submit">
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
    formData: {
      siteName: '',
      siteComments: ''
    }
  }),
  validations: {
    siteName: {  }
  },
  methods:{
    onSubmit(){
      console.log(this.formData);
    },
    goBack() {
      this.$router.go(-1);
    },
  }
  // mounted() {
  //   M.updateTextFields()
  // },
  // methods: {
  //   async submitHandler() {
  //     if (this.$v.$invalid) {
  //       this.$v.$touch()
  //       return
  //     }
  //
  //     try {
  //       const site = await this.$store.dispatch('createSite', {
  //         siteName: this.siteName,
  //         siteComments: this.siteComments
  //       })
  //       this.siteName = ''
  //       this.siteComments = ''
  //       this.$v.$reset()
  //       this.$message(localizeFilter('Site_HasBeenCreated'))
  //       this.$emit('created', site)
  //     } catch (e) {}
  //   }
  // }
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
