<template>
  <div class="main-content-container container-fluid px-4">
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Создать</span>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-body">
            <ValidationObserver v-slot="{handleSubmit}">
              <form @submit.prevent="handleSubmit(onSubmit)">
                <div class="from-group">
                  <label for="name1">Наименование отходов</label>
                  <ValidationProvider name="name-waste-pasport" rules="nullInput" v-slot="{errors,classes}" >
                    <input id="name1"
                           type="text"
                           v-model="title"
                           class="form-control"
                           :class="classes"
                    />
                    <span class="null_error">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>

                <!-- Код отхода -->
                <div class="from-group">
                  <label for="waste-code1">Код отхода</label>
                  <ValidationProvider name="waste-code1" rules="nullInput" v-slot="{errors,classes}" >
                    <input id="waste-code1"
                           type="text"
                           v-model="wasteCode"
                           class="form-control"
                           :class="classes"
                    />
                    <span class="null_error">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>

                <!-- Агрегатное состояние отходов -->
                <div class="from-group">
                  <label>Агрегатное состояние отходов</label>
                  <p>
                    <label for="solid1">
                      <input name="group2" type="radio" id="solid1" value="solid" class="mr-2" v-model="wasteAggregateState" />
                      <span>Твердые</span>
                    </label>
                    <br />
                    <label for="liquid1">
                      <input name="group2" type="radio" id="liquid1" value="liquid" class="mr-2"  v-model="wasteAggregateState" />
                      <span>Жидкие</span>
                    </label>
                    <br />
                    <label for="pasty1">
                      <input name="group2" type="radio" id="pasty1" value="pasty" class="mr-2"  v-model="wasteAggregateState" />
                      <span>Пастообразные</span>
                    </label>
                    <br />
                  </p>
                </div>

                <!-- Происхождение отходов -->

                <div class="input-field">
                  <h5>Происхождение отходов</h5>
                  <table class="meta-table">
                    <!-- <thead>
                      <tr>
                        <th>
                          <label>{{'Waste_Source' | localize}}</label>
                        </th>
                        <th>
                          <label>{{'Waste_Process_Name' | localize}}</label>
                        </th>
                        <th>
                          <label>{{'Waste_Hazard_Property' | localize}}</label>
                        </th>
                        <th></th>
                      </tr>
                    </thead>-->
                    <tbody>
                    <tr class="item" v-for="(waste, index) in wastesOrigin" :key="index">
                      <td>
                        <ValidationProvider name="1-name-waste-pasport" rules="nullInput" v-slot="{errors,classes}" >
                          <label>
                            Перечень и наименование исходных материалов, из которых образовались отходы
                          </label>
                          <input type="text"
                                 class="form-control"
                                 v-model="waste.wasteSource"
                                 :class="classes"
                          />
                          <span class="null_error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </td>
                      <td>
                        <ValidationProvider name="2-name-waste-pasport" rules="nullInput" v-slot="{errors,classes}" >
                          <label>
                              Наименование технологического процесса
                            </label>
                            <input type="text"
                                   class="form-control"
                                   v-model="waste.processName"
                                   :class="classes"
                            />
                            <span class="null_error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </td>
                      <td>
                        <ValidationProvider name="3-name-waste-pasport" rules="nullInput" v-slot="{errors,classes}" >
                            <label>
                              Наименование технологического процесса
                            </label>
                            <input type="text"
                                   class="form-control"
                                   v-model="waste.hazardProperty"
                                   :class="classes" />
                            <span class="null_error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </td>
                      <td class="text-right">
                        <button class="btn btn-danger waves-effect waves-light" @click.prevent="deleteItem(index)">
                          <i class="material-icons">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="4">
                        <button class="waves-effect waves-light btn-small" @click.prevent="addRow">
                          <i class="material-icons">exposure_plus_1</i>
                        </button>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>

                <!-- Химический состав отходов и описание опасных свойств их компонентов: -->

                <div class="input-field table-responsive">
                  <h5>Химический состав отходов и описание опасных свойств их компонентов</h5>
                  <table class="meta-table">
                    <!--         <thead>-->
                    <!--            <tr>-->
                    <!--              <th>-->
                    <!--                <label>Наименование компонента отходов</label>-->
                    <!--              </th>-->
                    <!--              <th>-->
                    <!--                <label>Концентрации Сi, мг/кг</label>-->
                    <!--              </th>-->
                    <!--              <th>-->
                    <!--                <label>Наименование и единица измерения</label>-->
                    <!--              </th>-->
                    <!--              <th>-->
                    <!--                <label>Значение</label>-->
                    <!--              </th>-->
                    <!--              <th>-->
                    <!--                <label>Уровень опасности отхода</label>-->
                    <!--              </th>-->
                    <!--              <th>-->
                    <!--                <label>Уровень опасности отхода (значение)</label>-->
                    <!--              </th>-->
                    <!--              <th>-->
                    <!--                <label>Обозначение документа, из которого взята характеристика</label>-->
                    <!--              </th>-->
                    <!--              <th></th>-->
                    <!--            </tr>-->
                    <!--            </thead>-->
                    <tbody>
                    <tr class="item" v-for="(w, idx) in wastesComposition" :key="idx">
                      <td>
                        <ValidationProvider name="chim-1-name-waste-pasport" rules="nullInput" v-slot="{errors,classes}" >
                          <label>Наименование компонента отходов</label>
                          <input type="text"
                                 class="form-control"
                                 v-model="w.wasteComponentName"
                                 :class="classes"
                          />
                          <span class="null_error">{{ errors[0] }}</span>
                        </ValidationProvider>

                      </td>
                      <td>
                        <ValidationProvider name="chim-2-name-waste-pasport" rules="nullInput" v-slot="{errors,classes}" >
                          <label>Концентрации Сi, мг/кг</label>
                          <input type="number" class="form-control" v-model.number="w.wasteComponentConcentration" />
                          <span class="null_error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </td>
                      <td>
                        <ValidationProvider name="chim-3-name-waste-pasport" rules="nullInput" v-slot="{errors,classes}" >
                          <label>Наименование и единица измерения</label>
                          <input type="text" class="form-control" v-model="w.wasteIndexSourceName" />
                          <span class="null_error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </td>
                      <td>
                        <ValidationProvider name="chim-4-name-waste-pasport" rules="nullInput" v-slot="{errors,classes}" >
                          <label>Значение</label>
                          <input type="text" class="form-control" v-model="w.wasteIndexSourceValue" />
                          <span class="null_error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </td>
                      <td>
                        <ValidationProvider name="chim-5-name-waste-pasport" rules="nullInput" v-slot="{errors,classes}" >
                          <label>Уровень опасности отхода</label>
                          <select v-model="w.hazWasteLevel" class="custom-select browser-default">
                            <option value disabled selected>Пожалуйста выберите из списка</option>
                            <option value="amber">A</option>
                            <option value="red">R</option>
                            <option value="green">G</option>
                            <option value="na">Не применимо</option>
                          </select>
                          <span class="null_error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </td>

                      <td>
                        <ValidationProvider name="chim-6-name-waste-pasport" rules="nullInput" v-slot="{errors,classes}" >
                          <label>Уровень опасности отхода (значение)</label>
                          <input type="number" class="form-control" v-model.number="w.hazWasteLevelValue" />
                          <span class="null_error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </td>
                      <td>
                        <ValidationProvider name="chim-7-name-waste-pasport" rules="nullInput" v-slot="{errors,classes}" >
                          <label>Обозначение документа, из которого взята характеристика</label>
                          <input type="text" class="form-control" v-model="w.wasteIndexSourceDocument" />
                          <span class="null_error">{{ errors[0] }}</span>
                        </ValidationProvider>
                      </td>
                      <td class="text-right small-font">
                        <button class="btn btn-danger waves-effect waves-light" @click.prevent="deleteWasteComposition(idx)">
                          <i class="material-icons">delete</i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td colspan="4">
                        <button class="waves-effect waves-light btn-small" @click.prevent="addWasteComposition">
                          <i class="material-icons">exposure_plus_1</i>
                        </button>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>

                <!-- Рекомендуемый способ переработки отходов -->
                <div class="form-group">
                  <ValidationProvider name="recycling-type1" rules="nullInput" v-slot="{errors,classes}" >
                    <label for="recycling-type1">Рекомендуемый способ переработки отходов</label>
                      <textarea id="recycling-type1"
                                type="text"
                                v-model="recyclingType"
                                class="form-control form-control-textarea"
                                aria-label="With textarea"
                                :class="classes"

                      />
                      <span class="null_error">{{ errors[0] }}</span>
                  </ValidationProvider>
                  <!--          <span v-if="$v.recyclingType.$dirty && !$v.recyclingType.required"-->
                  <!--                class="helper-text invalid">{{'Message_Recycling_Type_Title'|localize}}</span>-->
                </div>

                <!-- необходимые меры предосторожности при обращении с отходами -->
                <div class="form-group">
                  <ValidationProvider name="precaution-type1" rules="nullInput" v-slot="{errors,classes}" >
                    <label for="precaution-type1">Необходимые меры предосторожности при обращении с отходами</label>
                    <textarea id="precaution-type1"
                              type="textarea"
                              v-model="precaution"
                              class="form-control form-control-textarea"
                              :class="classes"
                    />
                    <span class="null_error">{{ errors[0] }}</span>
                  </ValidationProvider>

                  <!--          <span v-if="$v.precaution.$dirty && !$v.precaution.required"-->
                  <!--                class="helper-text invalid">{{'Message_Precaution_Title'|localize}}</span>-->
                </div>
                <!-- END необходимые меры предосторожности при обращении с отходами -->

                <!-- Требование к транспортировке отходов и проведение погрузо-разгрузочных
                работ-->
                <div class="form-group">
                  <ValidationProvider name="transportation-requirements1" rules="nullInput" v-slot="{errors,classes}" >
                    <label for="transportation-requirements1">Требование к транспортировке отходов и проведение погрузо-разгрузочных
                      работ</label>
                    <textarea id="transportation-requirements1"
                              type="textarea"
                              v-model="transportationRequirements"
                              class="form-control form-control-textarea"
                              :class="classes"
                    />
                    <span class="null_error">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <!-- END Требование к транспортировке отходов и проведение погрузо-разгрузочных
                работ-->

                <!-- Меры по предупреждению и ликвидации чрезвычайных ситуаций природного и техногенного
                характера и их последствий-->
                <div class="form-group">
                  <ValidationProvider name="emergency-requirements1" rules="nullInput" v-slot="{errors,classes}" >
                    <label for="emergency-requirements1">Меры по предупреждению и ликвидации чрезвычайных ситуаций природного и техногенного
                      характера и их последствий</label>
                    <textarea id="emergency-requirements1"
                              type="textarea"
                              v-model="emergency"
                              class="form-control form-control-textarea"
                              :class="classes"
                    />
                    <span class="null_error">{{ errors[0] }}</span>
                  </ValidationProvider>

                </div>

                <!-- Дополнительная информация -->
                <div class="form-group">
                  <ValidationProvider name="additional-info1" rules="nullInput" v-slot="{errors,classes}" >
                    <label for="additional-info1">Дополнительная информация</label>
                    <textarea id="additional-info1"
                              type="textarea"
                              v-model="additionalInfo"
                              class="form-control form-control-textarea"
                              :class="classes"
                    />
                    <span class="null_error">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>

                <!-- waste color -->
                <label>Цвет отхода</label>
                <p>
                  <label for="one">
                    <input name="group1" class="mr-2" type="radio" id="one" value="red" v-model="wasteColor.color" />
                    <span>Красный</span>
                  </label>
                  <br />
                  <label for="two">
                    <input name="group1" class="mr-2" type="radio" id="two" value="amber" v-model="wasteColor.color" />
                    <span>Янтарный</span>
                  </label>
                  <br />
                  <label for="three">
                    <input name="group1" class="mr-2" type="radio" id="three" value="green" v-model="wasteColor.color" />
                    <span>Зеленый</span>
                  </label>
                  <br />
                  <label for="four">
                    <input name="group1" class="mr-2" type="radio" id="four" value="na" v-model="wasteColor.color" />
                    <span>Не применимо</span>
                  </label>
                  <br />
                  <!--          <span v-if="$v.wasteColor.colorq.$dirty && !$v.wasteColor.color.required"-->
                  <!--                class="helper-text invalid">{{'Message_Waste_Type_Title'|localize}}</span>-->
                </p>

                <!-- для отчета по инвентаризации отходов -->

                <div class="form-group">
                  <label for="waste-types1">Вид отходов</label>
                  <select v-model="wasteColor.wasteType" v-if="wasteColor.color" class="browser-default">
                    <option id="waste-types1" v-for="(option, id) in setOptions" v-bind:value="option" v-bind:key="id">
                      {{option.text}}</option>
                  </select>
                  <br />
                </div>

                <!-- индекс отхода  -->

                <div class="form-group">
                  <ValidationProvider name="waste-index1" rules="nullInput" v-slot="{errors,classes}" >
                    <label for="waste-index1">Индекс отхода</label>
                    <input id="waste-index1"
                           type="text"
                           v-model="wasteIndex"
                           class="form-control"
                           :class="classes"
                    />
                    <span class="null_error">{{ errors[0] }}</span>
                  </ValidationProvider>

                </div>

                <!-- END -->

                <!-- Limit waste -->

                <div class="form-group">
                  <ValidationProvider name="limit1" rules="nullInput" v-slot="{errors,classes}" >
                    <label for="limit1">Лимит</label>
                    <input id="limit1" type="number"
                           v-model.number="limit"
                           class="form-control"
                           :class="classes"

                    />
                    <span class="null_error">{{ errors[0] }}</span>
                  </ValidationProvider>
                  <!--          <span v-if="$v.limit.$dirty && !$v.limit.minValue"-->
                  <!--                class="helper-text invalid">{{'Message_MinLength'|localize}} {{$v.limit.$params.minValue.min}}</span>-->
                </div>

                <!-- Limit KZT -->

                <div class="form-group">
                  <ValidationProvider name="limitKZT1" rules="nullInput" v-slot="{errors,classes}" >
                    <label for="limitKZT1">Лимит KZT</label>
                    <input id="limitKZT1" type="number"
                           v-model.number="limitKZT"
                           class="form-control"
                           :class="classes"
                    />
                    <span class="null_error">{{ errors[0] }}</span>
                  </ValidationProvider>
                  <!--          <span v-if="$v.limitKZT.$dirty && !$v.limitKZT.minValue"-->
                  <!--                class="helper-text invalid">{{'Message_MinLength'|localize}} {{$v.limit.$params.minValue.min}}</span>-->
                </div>
                <button class="btn btn-primary waves-effect waves-light mb-4 mr-2" @click="goBack" type="submit">
                  Назад
                </button>
                <button class="btn btn-success waves-effect waves-light mb-4" type="submit">
                  Создать
                  <i class="material-icons right">send</i>
                </button>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </div>
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
  data: () => ({
    title: '',
    wasteCode: '',
    wasteColor: {
      color: undefined,
      wasteType: undefined
    },
    wasteAggregateState: '',
    wastesOrigin: [{
      wasteSource: '',
      processName: '',
      hazardProperty: '',
    }, ],
    wastesComposition: [{
      wasteComponentName: '',
      wasteComponentConcentration: '',
      wasteIndexSourceName: '',
      wasteIndexSourceValue: '',
      hazWasteLevel: '',
      hazWasteLevelValue: '',
      wasteIndexSourceDocument: '',
    }, ],
    recyclingType: '',
    precaution: '',
    transportationRequirements: '',
    emergency: '',
    additionalInfo: '',
    wasteIndex: '',
    limit: 100,
    limitKZT: 50000,
  }),
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    addRow() {
      this.wastesOrigin.push({
        wasteSource: '',
        processName: '',
        hazardProperty: ''
      })
    },
    addWasteComposition() {
      this.wastesComposition.push({
        wasteComponentName: '',
        wasteComponentConcentration: '',
        wasteIndexSourceName: '',
        wasteIndexSourceValue: '',
        hazWasteLevel: '',
        hazWasteLevelValue: '',
        wasteIndexSourceDocument: ''
      })
    },
    deleteWasteComposition(idx) {
      this.wastesComposition.splice(idx, 1)
    },
    deleteItem(index) {
      this.wastesOrigin.splice(index, 1)
    },
  }
}
</script>

<style scoped>
.form-control.invalid {
  border-bottom: 1px solid red;
}
textarea.invalid{
  border: 1px solid red;
}
.null_error{
  color: red;
  font-weight: normal;
}
.form-control{
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
.form-control-textarea{
  height: auto;
  width: 100%;
  padding: 0.435rem 0.0rem;
  font-size: 0.8125rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #e1e5eb;
  font-weight: 300;
  will-change: border-color, box-shadow;
  border-radius: 0.25rem;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-transition: border 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06), -webkit-box-shadow 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
  transition: box-shadow 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06), border 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06), -webkit-box-shadow 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
}
.btn-small{
  padding: 0px 16px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);
  background-color: #26a69a;
  color: #fff;
  height: 32.4px;
  font-size: 13px;
}
.btn-small:hover {
  background-color: #2bbbad;
}
/* .small-font {
  font-size: 0.7rem;
} */
/* [data-foo]:after {
    content: attr(data-foo);
    background-color: black;
    color: white;
    white-space: pre;
    display: inline-block;
} */

/* td {padding: 2px 5px;}
td input{margin:0 !important;height:2em !important;}
td .select-wrapper input.select-dropdown{height:2em;line-height:2em;} */
</style>
