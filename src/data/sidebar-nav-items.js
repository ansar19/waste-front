export default function () {
  return [{
    title: 'Главная панель',
    to: {
      name: 'system-overview',
    },
    htmlBefore: '<i class="material-icons">edit</i>',
    htmlAfter: '',
  }, {
    title: 'Limits',
    htmlBefore: '<i class="material-icons">trending_up</i>',
    to: {
      name: 'limits',
    },
  }, {
    title: 'Users',
    htmlBefore: '<i class="material-icons">person</i>',
    to: {
      name: 'users',
    },
  }, {
    title: 'History',
    htmlBefore: '<i class="material-icons">table_chart</i>',
    to: {
      name: 'history',
    },
  }, {
    title: 'Utilizers',
    htmlBefore: '<i class="material-icons">table_chart</i>',
    to: {
      name: 'utilizers',
    },
  }, {
    title: 'Sites',
    htmlBefore: '<i class="material-icons"> home_work</i>',
    to: {
      name: 'Sites',
    }, 
  }];
}
