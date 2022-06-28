export const ROUTES = {
  login: '/login',
  home: '/home',
  orderList: '/order-list',
  order: '/order',
}

export const defaultPizza = {
  settings: {
    size: {
      name: 'Размер',
      props: [{
        name: '30 см',
        slug: '30',
        price: 0,
      }],
    },
    dough: {
      name: 'Тесто',
      props: [{
        name: 'Тонкое',
        slug: 'thin',
        price: 0,
      }],
    },
    sauce: {
      name: 'Соус',
      props: [{
        name: 'Томатный',
        slug: 'tomato',
        price: 0,
      }],
    } ,
    cheese: {
      name: 'Сыр',
      props: [],
    },
    vegetables: {
      name: 'Овощи',
      props: [],
    },
    meat: {
      name: 'Мясо',
      props: [],
    },
  },
  defaultPrice: 200,
  price: 200,
}