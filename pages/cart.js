const catalogCommands = {

};

module.exports = {
  url: 'https://bamboo.dev.sozvezdie-tour.ru/cart/',
  commands: [catalogCommands],
  elements: {
    title: {selector: '#page-content > div:nth-child(1) > div:nth-child(1) > h1'},

    orderName: {selector: '#name'},
    orderEmail: {selector: '#email'},
    orderPass: {selector: '#password'},

    orderCardNum: {selector: '#cardNumber'},
    orderCardName: {selector: '#cardName'},
    orderCardExp: {selector: '#cardExpiry'},
    orderCardCVC: {selector: '#cardCvc'},

    btnPay: {selector: '#page-content > div:nth-child(1) > div:nth-child(2) > form > div.mt-4.text-center > button'},

    alertCartEmpty: {selector: '#page-content > div:nth-child(1) > div > div'},
    orderLine1: {selector: '#page-content > div:nth-child(2) > div > table > tbody > tr > td:nth-child(1)'}


  }
};