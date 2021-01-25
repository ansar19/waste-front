export default function () {
  return [{
    title: 'Главная',
    to: {
      name: 'dashboard',
    },
    htmlBefore: '<i class="material-icons">dashboard</i>',
    htmlAfter: '',
  }, {
    title: 'Лимиты',
    htmlBefore: '<i class="material-icons">trending_up</i>',
    to: {
      name: 'limits',
    },
  }, {
    title: 'Пользователи',
    htmlBefore: '<i class="material-icons">person</i>',
    to: {
      name: 'users',
    },
  }, {
    title: 'Журнал',
    htmlBefore: '<i class="material-icons">sticky_note_2</i>',
    to: {
      name: 'history',
    },
  },{
    title: 'Участки',
    htmlBefore: '<i class="material-icons"> home_work</i>',
    to: {
      name: 'sites',
    }, 
  }, {
    title: 'Перевозчики',
    htmlBefore: '<i class="material-icons"> local_shipping</i>',
    to: {
      name: 'transporters',
    }, 
  }, {
    title: 'Места утилизации',
    htmlBefore: '<i class="material-icons">outlined_flag</i>',
    to: {
      name: 'utilizers',
    },
  },
  {
    title: 'Конвертер',
    htmlBefore: '<i class="material-icons">change_circle</i>',
    to: {
      name: 'utilizers',
    },
  },
  {
    title: 'Конвертер',
    htmlBefore: '<i class="material-icons">change_circle</i>',
    to: {
      name: 'converters',
    },
  }];
}
