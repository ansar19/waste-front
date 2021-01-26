<template>
  <div class="main-content-container container-fluid px-4">
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Редактировать</span>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-body">
              <form @submit.prevent="submitHandler">
        <div class="form-group">
          <label>Выберите отход</label>
          <select ref="select" v-model="current" class="custom-select form-control-custom">
            <option v-for="c of categories" :key="c.id" :value="c.id" class="custom-option">
              <span class="custom-option-p">{{c.title}}</span>
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="name">Наименование отходов</label>
          <input id="name" type="text" v-model="title"
                 class="form-control" />
<!--          <span v-if="$v.title.$dirty && !$v.title.required"-->
<!--                class="helper-text invalid">{{'Message_CategoryTitle'|localize}}</span>-->
        </div>

        <!-- Код отхода -->
        <div class="from-group">
          <label for="waste-code">Код отхода</label>
          <input id="waste-code" type="text" v-model="wasteCode" class="form-control" />
        </div>

        <!-- Агрегатное состояние отходов -->
        <div class="from-group">
          <label>Агрегатное состояние отходов</label>
          <p>
            <label for="solid">
              <input name="group2" type="radio" id="solid" value="solid" class="mr-2" v-model="wasteAggregateState" />
              <span>Твердые</span>
            </label>
            <br />
            <label for="liquid">
              <input name="group2" type="radio" id="liquid" value="liquid" class="mr-2" v-model="wasteAggregateState" />
              <span>Жидкие</span>
            </label>
            <br />
            <label for="pasty">
              <input name="group2" type="radio" id="pasty" value="pasty" class="mr-2" v-model="wasteAggregateState" />
              <span>Пастообразные</span>
            </label>
            <br />
          </p>
        </div>

        <!-- Происхождение отходов -->

        <div class="input-field">
          <h5>Происхождение отходов</h5>
          <table class="table">
            <thead>
            <tr>
              <th>
                <label>Перечень и наименование исходных материалов, из которых образовались отходы</label>
              </th>
              <th>
                <label>Наименование технологического процесса</label>
              </th>
              <th>
                <label>Перечень опасных свойств отходов</label>
              </th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr class="item" v-for="(waste, index) in wastesOrigin" :key="index">
              <td>
                <input type="text" class="form-control" v-model="waste.wasteSource" />
              </td>
              <td>
                <input type="text" class="form-control" v-model="waste.processName" />
              </td>
              <td>
                <input type="text" class="form-control" v-model="waste.hazardProperty" />
              </td>
              <td class="text-right">
                <button class="btn btn-danger waves-effect waves-light" v-on:click="deleteItem(index)">
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
          <h5>Химический состав отходов и описание опасных свойств их компонентов:</h5>
          <table class="table">
            <thead>
            <tr>
              <th>
                <label>Наименование компонента отходов</label>
              </th>
              <th>
                <label>Концентрации Сi, мг/кг</label>
              </th>
              <th>
                <label>Наименование и единица измерения</label>
              </th>
              <th>
                <label>Значение</label>
              </th>
              <th>
                <label>Уровень опасности отхода</label>
              </th>
              <th>
                <label>Уровень опасности отхода (значение)</label>
              </th>
              <th>
                <label>Обозначение документа, из которого взята характеристика</label>
              </th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr class="item" v-for="(w, idx) in wastesComposition" :key="idx">
              <td>
                <input type="text" class="form-control" v-model="w.wasteComponentName" />
              </td>
              <td>
                <input type="number" class="form-control" v-model.number="w.wasteComponentConcentration" />
              </td>
              <td>
                <input type="text" class="form-control" v-model="w.wasteIndexSourceName" />
              </td>
              <td>
                <input type="text" class="form-control" v-model="w.wasteIndexSourceValue" />
              </td>
              <td>
                <select v-model="w.hazWasteLevel" class="custom-select browser-default">
                  <option value disabled selected>Пожалуйста выберите из списка</option>
                  <option value="amber">A</option>
                  <option value="red">R</option>
                  <option value="green">G</option>
                  <option value="na">Не применимо</option>
                </select>
              </td>
              <td>
                <input type="number" class="form-control" v-model.number="w.hazWasteLevelValue" />
              </td>
              <td>
                <input type="text" class="form-control" v-model="w.wasteIndexSourceDocument" />
              </td>
              <td class="text-right">
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
          <label for="recycling-type">Рекомендуемый способ переработки отходов</label>
          <textarea id="recycling-type" type="text" v-model="recyclingType" class="form-control form-control-textarea"></textarea>

<!--          <span v-if="$v.recyclingType.$dirty && !$v.recyclingType.required"-->
<!--                class="helper-text invalid">{{'Message_Recycling_Type_Title'|localize}}</span>-->
        </div>

        <div class="form-group">
          <label for="precaution-type">Необходимые меры предосторожности при обращении с отходами</label>
          <textarea id="precaution-type" type="textarea" v-model="precaution" class="form-control form-control-textarea"></textarea>
<!--          <span v-if="$v.title.$dirty && !$v.precaution.required"-->
<!--                class="helper-text invalid">{{'Message_Precaution_Title'|localize}}</span>-->
        </div>

        <!-- Требование к транспортировке отходов и проведение погрузо-разгрузочных
        работ-->
        <div class="form-group">
          <label for="transportation-requirements">Требование к транспортировке отходов и проведение погрузо-разгрузочных
            работ</label>
          <textarea id="transportation-requirements" type="textarea" v-model="transportationRequirements"
                    class="form-control form-control-textarea"></textarea>
        </div>
        <!-- END Требование к транспортировке отходов и проведение погрузо-разгрузочных
        работ-->

        <!-- Меры по предупреждению и ликвидации чрезвычайных ситуаций природного и техногенного
        характера и их последствий-->
        <div class="form-group">
          <label for="emergency-requirements">Меры по предупреждению и ликвидации чрезвычайных ситуаций природного и техногенного
            характера и их последствий</label>
          <textarea id="emergency-requirements" type="textarea" v-model="emergency" class="form-control form-control-textarea"></textarea>
        </div>

        <!-- Дополнительная информация -->
        <div class="form-group">
          <label for="additional-info">Дополнительная информация</label>
          <textarea id="additional-info" type="textarea" v-model="additionalInfo" class="form-control form-control-textarea"></textarea>
        </div>

        <!-- waste color -->
        <label>Цвет отхода</label>
        <p>
          <label for="red">
            <input name="group1" type="radio" id="red" value="red" class="mr-2" v-model="wasteColor.color" />
            <span>Красный</span>
          </label>
          <br />
          <label for="amber">
            <input name="group1" type="radio" id="amber" value="amber" class="mr-2" v-model="wasteColor.color" />
            <span>Янтарный</span>
          </label>
          <br />
          <label for="green">
            <input name="group1" type="radio" id="green" value="green" class="mr-2" v-model="wasteColor.color" />
            <span>Зеленый</span>
          </label>
          <br />
          <label for="na">
            <input name="group1" type="radio" id="na" value="na" class="mr-2" v-model="wasteColor.color" />
            <span>Не применимо</span>
          </label>
          <br />
<!--          <span v-if="$v.wasteColor.color.$dirty && !$v.wasteColor.color.required"-->
<!--                class="helper-text invalid">{{'Message_Waste_Type_Title'|localize}}</span>-->
        </p>

        <!-- для отчета по инвентаризации отходов -->

        <div class="form-group">
          <label for="waste-types">Вид отходов</label>
          <select v-model="wasteColor.wasteType" v-if="wasteColor.color" class="custom-select browser-default">
            <option id="waste-types" v-for="(option, id) in setOptions" v-bind:value="option" v-bind:key="id">
              {{option.text}}</option>
          </select>

          <br />

        </div>

        <!-- индекс отхода  -->

        <div class="form-group">
          <label for="waste-index">Индекс отхода</label>
          <input id="waste-index" type="text" v-model="wasteIndex" class="form-control" />
        </div>

        <!-- END -->

        <!-- Limit Mass -->

        <div class="form-group">
          <label for="limit">Лимит</label>
          <input id="limit" type="number" v-model.number="limit" class="form-control" />
<!--          <span v-if="$v.limit.$dirty && !$v.limit.minValue"-->
<!--                class="helper-text invalid">{{'Message_MinLength'|localize}} {{$v.limit.$params.minValue.min}}</span>-->
        </div>

        <!-- Limit KZT -->

        <div class="form-group">
          <label for="limit-kzt">Лимит KZT</label>
          <input id="limit-kzt" type="number" v-model.number="limitKZT" class="form-control" />
<!--          <span v-if="$v.limitKZT.$dirty && !$v.limitKZT.minValue"-->
<!--                class="helper-text invalid">{{'Message_MinLength'|localize}} {{$v.limitKZT.$params.minValue.min}}</span>-->
        </div>
        <button class="btn btn-primary waves-effect waves-light mb-4 mr-2" @click="goBack" type="submit">
          Назад
        </button>
        <button class="btn btn-success waves-effect waves-light mb-4" type="submit">
          Обновить
          <i class="material-icons right">send</i>
        </button>
      </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {
//   required,
//   minValue
// } from 'vuelidate/lib/validators'
// import localizeFilter from '@/filters/localize.filter'

export default {

  data: () => ({
    setOptions: [
      {
        text: 'отходы, содержащие ртуть'
      },
      {
        text: 'включая ртутьсодержащие лампы'
      },
      {
        text: 'отходы, содержащие мышьяк'
      },
      {
        text: 'отходы, содержащие хром шестивалентный'
      },
      {
        text: 'отходы, содержащие свинец'
      },
      {
        text: 'отходы, содержащие цинк'
      },
      {
        text: 'отработанные аккумуляторы, целые или разломанные'
      },
      {
        text: 'отходы, содержащие цианиды'
      }
    ],
    categories: [
      {
        title: 'Отработанное масло',
        waste_code: 'N1300200//Q7//WL1//C81//H3//R9//A150//AC030',
        agregate: 'Жидкие',

      },
      {
        title: 'Отработанные аккумуляторы'
      },
      {
        title: 'Отходы лакокрасочных материалов'
      },
      {
        title: 'Твердые бытовые (коммунальные) отходы'
      },
      {
        title: 'Нефтешлам'
      },
      {
        title: 'Электроды'
      },
      {
        title: 'Отходы деревообработки'
      },
      {
        title: 'Отработанные автошины'
      },
      {
        title: 'Строительные отходы'
      },
      {
        title: 'Картон'
      },
      {
        title: 'Хвосты фабрики'
      }
    ],
    select: null,
    title: '',
    wasteCode: '',
    wasteColor: {
      color: undefined,
      wasteType: undefined
    },
    wasteAggregateState: '',
    wastesOrigin: [{
      wasteSource: 'Кислотные аккумуляторы с электролитом',
      processName: 'Эксплуатация автотранспорта, замена аккумуляторов. Образуется в гараже предприятия',
      hazardProperty: '-'
    }],
    wastesComposition: [{
      wasteComponentName: 'Pb',
      wasteComponentConcentration: '782600',
      wasteIndexSourceName: 'ПДКп (ОДК), мг/кг почвы',
      wasteIndexSourceValue: '32',
      hazWasteLevel: 'A',
      hazWasteLevelValue: '842',
      wasteIndexSourceDocument: 'Приложение No 18 к приказу Министра охраны окружающей среды Республики Казахстан от «18» 04 2008г. No100 -п МУ 2.1.7.730-99.Гигиеническая оценка качества почвы населенных мест, М., 1999 г.'
    }],
    recyclingType: 'D5-размещение в специально приспособленных земляных сооружениях, R4-рециклирование металлов и их соединений, R6-регенерация кислот.',
    precaution: 'Использовать средства индивидуальной защиты.\n' +
      'Хранение на оборудованных площадках под навесом или в помещениях с принудительной вентиляцией, на полках, стеллажах или поддонах, в вертикальном положении.',
    transportationRequirements: 'Транспортировку отходов следует производить в соответствии с процедурными документами, разработанными на предприятии. Отходы перевозятся транспортом, исключающим возможность потерь по пути следования и загрязнения окружающей среды.\n' +
      'При транспортировке отходов не допускается присутствие посторонних лиц , кроме водителя и сопровождающего груз персонала предприятия. Отработанные свинцовые аккумуляторы , с не слитым электролитом транспортируются отдельным транспортом, никакие другие опасные отходы не могут быть транспортированы тем же автотранспортом.',
    emergency: 'В случае разлива аккумуляторной кислоты обработать поверхность пола или площадки кальцинированной содой или аммиачной водой, после чего тщательно промыть.',
    additionalInfo: '-',
    wasteIndex: 'AA170',
    limit: 100,
    limitKZT: 50000,
    current: null
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
.custom-select{
  background-color: rgba(255,255,255,0.9);
  width: 100%;
  padding: 5px;
  border: 1px solid #f2f2f2;
  border-radius: 2px;
  height: 3rem;
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
  width: 98%;
  padding: 0.535rem 0.0rem;
  padding-left: 15px;
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
.custom-option{
  font-size: 20px !important;
  color: #26a69a;
  display: block;
  line-height: 22px;
  padding-right: 20px !important;
  background-color: #fff;
}

</style>
