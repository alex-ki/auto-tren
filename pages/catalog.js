const catalogCommands = {


  elCardDates(n) {
    return `.card-deck > a.card:nth-child(${n}) > .list-group > .list-group-item:first-child > strong`;
  },

  elCardPrice(n) {
    return `.card-deck > a.card:nth-child(${n}) > .list-group > .list-group-item:last-child > strong`;
  },

};

module.exports = {
  url: 'https://bamboo.dev.sozvezdie-tour.ru/cat/',
  commands: [catalogCommands],
  elements: {
    title: {selector: '#catalog-header'},
    infoCard: {selector: '.card-deck > a.card'},
    search: {selector: '#catalog-header > input'}


  }
};