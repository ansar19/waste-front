<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
      </div>
      <div class="card-body">
        <ValidationObserver v-slot="{handleSubmit}">
          <form @submit.prevent="handleSubmit(onSubmit)">
          <div class="table-responsive">
            <table class="table table-stripped table-hover">
              <caption class="caption-top">Редактор списка коэффициентов</caption>
              <thead>
              <tr class="bg-primary text-white">
                <th>Название отхода и единица измерения </th>
                <th>Коэффициент для перевода в тонны</th>
                <th>Комментарий</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(unitOfMeasurement, k) in unitOfMeasurements" :key="k">
                <td>
                  <ValidationProvider name="name-waste" rules="nullInput" v-slot="{errors,classes}" >
                    <input class="form-control form-control-input"
                           type="text"
                           v-model="unitOfMeasurement.name"
                           :class="classes"
                    />
                    <span class="null_error">{{ errors[0] }}</span>
                  </ValidationProvider>
                </td>
                <td>
                  <ValidationProvider name="coef-waste" rules="nullInput" v-slot="{errors,classes}" >
                    <input class="form-control form-control-input"
                           type="text"
                           v-model.number="unitOfMeasurement.coef"
                           :class="classes"
                    />
                    <span class="null_error">{{ errors[0] }}</span>
                  </ValidationProvider>
                </td>
                <td>
                  <ValidationProvider name="comment-waste" rules="nullInput" v-slot="{errors,classes}" >
                    <input class="form-control form-control-input"
                           type="text"
                           v-model="unitOfMeasurement.comment"
                           :class="classes"
                    />
                    <span class="null_error">{{ errors[0] }}</span>
                  </ValidationProvider>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <button type="button" class="btn btn-info mr-2" @click="addNewRow">Добавить</button>
          <button class="btn btn-success waves-effect waves-light" type="submit">
            Сохранить
            <i class="material-icons right">send</i>
          </button>
        </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
// import { required, minValue } from 'vuelidate/lib/validators'
// import localizeFilter from '@/filters/localize.filter'
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
  props: {
    converters: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    converterSelect: null,
    // converters: [],
    unitOfMeasurements: [
      {
        name: 'Остатки дерева в м3',
        coef: '0.6',
        comment: ''
      },
      {
        name: 'ТБО не уплотненная в м3',
        coef: '0.4',
        comment: ''
      },
      {
        name: 'ТБО спрессованная в м3',
        coef: '0.25',
        comment: ''
      },
      {
        name: 'Картон в м3',
        coef: '0.68',
        comment: ''
      },
      {
        name: 'Cтеклянные остатки в м3',
        coef: '2.5',
        comment: ''
      },
      {
        name: 'Cтеклотара в м3',
        coef: '2.5',
        comment: ''
      },
      {
        name: 'Полиэтиленовый мусор в м3',
        coef: '0.95',
        comment: ''
      },
      {
        name: 'Cтальные отходы в м3',
        coef: '7.7',
        comment: ''
      },
      {
        name: 'Замазученный грунт м3',
        coef: '2.2',
        comment: 'Согласно акту №22 от 12/06/2020'
      },

    ],
    name: '',
    coef: '',
    current: null,
  }),
  methods:{
    onSubmit(){
    },
    goBack() {
      this.$router.go(-1);
    },
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
.caption-top {
  caption-side: top;
}
.form-control-input{
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #9e9e9e;
  border-radius: 0;
  outline: none;
  height: 3rem;
  width: 100%;
  font-size: 16px;
  margin: 0 0 8px 0;
  padding: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  -webkit-transition: border .3s, -webkit-box-shadow .3s;
  transition: border .3s, -webkit-box-shadow .3s;
  transition: box-shadow .3s, border .3s;
  transition: box-shadow .3s, border .3s, -webkit-box-shadow .3s;
}
</style>
