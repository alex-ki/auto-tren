const catalogCommands = {


  elCardDates(n) {
    return `.card-deck > a.card:nth-child(${n}) > .list-group > .list-group-item:first-child > strong`;
  },

  elCardPrice(n) {
    return `.card-deck > a.card:nth-child(${n}) > .list-group > .list-group-item:last-child > strong`;
  },

};

module.exports = {
  url: 'https://bamboo.dev.sozvezdie-tour.ru/tour/0',
  commands: [catalogCommands],
  elements: {
    cartBadge: {selector: 'nav .badge'},
    title: {selector: '#page-content > div:nth-child(1) > div.col > h1'},
    buyTier1: {selector: '#page-content > table > tbody > tr:nth-child(1) button'},
    tier1ToCart: {selector: '#page-content > table > tbody > tr:nth-child(1) > td > a[href="/cart/"]'}

  }
};