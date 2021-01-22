export default function () {
  return [{
    title: 'Главная',
    to: {
      name: 'system-overview',
    },
    htmlBefore: '<i class="material-icons">edit</i>',
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
    htmlBefore: '<i class="material-icons">table_chart</i>',
    to: {
      name: 'history',
    },
  },{
    title: 'Участки',
    htmlBefore: '<i class="material-icons"> home_work</i>',
    to: {
      name: 'Sites',
    }, 
  }, {
    title: 'Места утилизации',
    htmlBefore: '<i class="material-icons">table_chart</i>',
    to: {
      name: 'utilizers',
    },
  }];
}
