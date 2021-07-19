<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <d-card class="card-small">
          <ValidationObserver v-slot="{handleSubmit}">
            <form @submit.prevent="handleSubmit(onSubmit)">
          <!-- Form Example -->
            <d-card-header class="border-bottom">
              <h6 class="m-0">Редактировать участок</h6>
            </d-card-header>

            <d-card-body>
              <div class="col s12 m6">
                <div>

                    <div class="form-group">
                      <label>Выберите участок</label>

                        <select ref="siteSelect" v-model="current" class="form-control form-control-input" >
                          <option class="form-option" v-for="s of sites" :key="s.id" :value="s.id">{{s.title}}</option>
                        </select>

                    </div>

                    <div class="form-group">
                      <label for="name">Наименование участка</label>
                      <ValidationProvider name="Name" rules="nullInput" v-slot="{errors,classes}" >
                        <input id="name"
                               type="text"
                               v-model="siteName"
                               class="form-control form-control-input"
                               :class="classes"
                        >
                        <span class="null_error">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>

                    <div class="form-group">
                      <label for="site-comments">Комментарии к участку</label>
                      <ValidationProvider name="Comment" rules="nullInput" v-slot="{errors,classes}" >
                        <textarea id="site-comments"
                                  type="textarea"
                                  v-model="siteComments"
                                  class="form-control"
                                  :class="classes"
                        >
                        </textarea>
                        <span class="null_error">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>


                    <button class="btn btn-success waves-effect waves-light" type="submit">
                      Обновить
                      <i class="material-icons right">send</i>
                    </button>

                </div>
              </div>
            </d-card-body>
            <div class="card-footer border-top">
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
    siteSelect: null,
    siteName: 'Баутино',
    siteComments: 'База поддержки',
    current: null,
    sites: [
      {
        title: 'Баутино'
      },
      {
        title: 'Карабатан'
      },
      {
        title: 'База Костанай'
      }
    ]
  }),
  validations: {
    siteName: {  }
  },
  watch: {
    current(siteId) {
      const { siteName, siteComments } = this.sites.find(s => s.id === siteId)
      this.siteName = siteName,
        this.siteComments = siteComments
    }
  },
  created() {
    const { id, siteName, siteComments } = this.sites[0]
    this.current = id
    this.siteName = siteName
    this.siteComments
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
    //   try {
    //     const siteData = {
    //       id: this.current,
    //       siteName: this.siteName,
    //       siteComments: this.siteComments
    //     }
    //     await this.$store.dispatch('updateSite', siteData)
    //     this.$message(localizeFilter('Site_HasBeenUpdated'))
    //     this.$emit('updated', siteData)
    //   } catch (e) {}
    // }
  },
  // mounted() {
  //   this.siteSelect = M.FormSelect.init(this.$refs.siteSelect)
  //   M.updateTextFields()
  // },
  // destroyed() {
  //   if (this.siteSelect && this.siteSelect.destroy) {
  //     this.siteSelect.destroy()
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
