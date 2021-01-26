<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <div class="card card-small mb-4 pt-3">
          <div class="card-header border-bottom text-center">
            <div class="mb-3 mx-auto"></div>
            <!-- vertical table head example -->
            <table
              v-for="(w, index) in wastes"
              :key="index"
              class="table table-bordered"
              style="width: 100%"
            >
              <tr>
                <th class="text-left">Наименование отходов:</th>
                <td>{{ w.wasteName }}</td>
              </tr>
              <tr>
                <th class="text-left">Код отхода</th>
                <td>{{ w.wasteCode }}</td>
              </tr>
              <tr>
                <th class="text-left">Рекомендуемый способ переработки отходов</th>
                <td>{{ w.recyclingType }}</td>
              </tr>
              <tr>
                <th class="text-left">Необходимые меры предосторожности при обращении с отходами</th>
                <td>{{ w.precaution }}</td>
              </tr>
              <tr>
                <th class="text-left">Требование к транспортировке отходов и проведение погрузо-разгрузочных работ</th>
                <td>{{ w.transportationRequirements }}</td>
              </tr>
              <tr>
                <th class="text-left">Меры по предупреждению и ликвидации ЧС природного и техногенного характера и их последствий</th>
                <td>{{ w.emergency }}</td>
              </tr>
              <tr>
                <th class="text-left">Дополнительная информация</th>
                <td>{{ w.additionalInfo }}</td>
              </tr>
              <tr>
                <th class="text-left">Индекс отхода</th>
                <td>{{ w.wasteIndex }}</td>
              </tr>
              <tr>
                <th class="text-left">Лимит</th>
                <td>{{ w.limit }}</td>
              </tr>
              <tr>
                <th class="text-left">Лимит KZT</th>
                <td>{{ w.limitKZT }}</td>
              </tr>
              <!-- <tr>
          <th class="text-left">Email:</th>
          <td>{{ u.email }}</td>
        </tr>
        <tr>
          <th class="text-left">Телефон:</th>
          <td>{{ u.phone }}</td>
        </tr>
        <tr>
          <th class="text-left">Должность:</th>
          <td>{{ u.position }}</td>
        </tr>
        <tr>
          <th class="text-left">Био:</th>
          <td>{{ u.bio }}</td>
        </tr> -->
            </table>
          </div>
          <div class="card-footer">
            <div class="col text-left view-report">
              <a @click="goBack()"> &larr; Вернуться назад </a>
            </div>
          </div>
        </div>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
export default {
  name: 'ShowWastePasport',
  data() {
    return {
      wastes: [
        {
          wasteName: 'Отработанные аккумуляторы',
          wasteCode: 'N200500//Q6//WM7//C27//H12//R4//A842//AA170',
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
        },
      ],
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
