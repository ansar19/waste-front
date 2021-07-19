<template>
  <div class="col s12 m6" @click="ks()">
    <Loader v-if="loading" />
    <ValidationObserver v-slot="{handleSubmit}">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <div class="card-body">
<!--       <h5>Простой конвертер отходов в тонны</h5>-->
          <div class="form-group">
            <label for="inputConverterValue">Введите число для расчета:</label>
            <ValidationProvider name="inputConverterValue" rules="nullInput" v-slot="{errors,classes}" >
              <input type="number"
                     class="form-control form-control-input"
                     v-model="kg"
                     id="inputConverterValue"
                     :class="classes"
              />
              <span class="null_error">{{ errors[0] }}</span>
            </ValidationProvider>
            <small id="inputConverterHelp" class="form-text text-muted">Введите число</small>
          </div>
          <div class="form-group">
            <label for="formControlSelect">Выберите параметр для конвертации:</label>
            <ValidationProvider name="formControlSelect" rules="nullInput" v-slot="{errors,classes}" >
              <select v-model="selectedCoef" class="custom-select" id="formControlSelect">
                <option v-for="(unitOfMeasurement, index) in unitOfMeasurements" v-bind:value="unitOfMeasurement.coef"
                        v-bind:key="index">{{unitOfMeasurement.name}}</option>
              </select>
              <span class="null_error">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        <!-- Copy to clipboard -->
        <div class="alert alert-primary" role="alert">Результат перевода: {{ wasteToTon()}} тонн
          <div class="input-group-append">
            <input type="hidden" id="data-to-copy" :value="wasteToTon">
            <button class="btn btn-outline-info text-white" type="button" @click.stop.prevent="copyResult"
                   >Скопировать</button>
          </div>
        </div>

        <!-- END Copy to clipboard -->

        <br />
        <div class="table-responsive">
          <table class="table table-stripped table-hover">
            <caption class="caption-top">Список коэффициентов</caption>
            <thead>
            <tr class="bg-primary text-white">
              <th>Название отхода и единица измерения</th>
              <th>Коэффициент для перевода в тонны</th>
              <th>Комментарий</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(unitOfMeasurement, idx) in unitOfMeasurements" v-bind:key="idx">
              <td>{{unitOfMeasurement.name}}</td>
              <td>{{unitOfMeasurement.coef}}</td>
              <td>{{unitOfMeasurement.comment}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
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
  name: 'converter-show',
  data: () => ({
    title: '',
    kg: 0,
    t: 0,

    converters: [],
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
    selectedCoef: 0.25,
    loading: true,
    current: null,

  }),
  methods:{
    onSubmit(){

    },
    goBack() {
      this.$router.go(-1);
    },
    copyResult() {
      let dataToCopy = document.querySelector('#data-to-copy')
      dataToCopy.setAttribute('type', 'text') // It is not hidden to copy
      dataToCopy.select()
      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        alert('Data was copied ' + msg);
      } catch (err) {
        alert('Oops, unable to copy');
      }
      /* unselect the range */
      dataToCopy.setAttribute('type', 'hidden')
      window.getSelection().removeAllRanges()
    },
    wasteToTon() {
      return((this.selectedCoef*this.kg).toFixed(3));
    }
  },
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
