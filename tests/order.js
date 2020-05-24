module.exports = {
  tags: ['card', 'business'],
  before: function (client) {
    client
      .resizeWindow(1280, 768)
      .setWindowPosition(300, 0);
  },

  after: function (client) {
    client.end();
  },

  'Add card to cart' : function (client) {
    var cardPage = client.page.card();
    cardPage.navigate();
    cardPage.waitForElementVisible('@title')

    cardPage
      .waitForElementVisible('@buyTier1')
      .assert.not.elementPresent('@cartBadge')

    cardPage
      .waitForElementAndClick('@buyTier1')
      .waitForElementVisible('@tier1ToCart')
      .assert.containsText('@tier1ToCart', 'В корзине')
      .assert.containsText('@cartBadge', '1')
  },

  'Checkout cart order' : function (client) {
    var cartPage = client.page.cart();
    cartPage.navigate();

    cartPage
      .waitForElementVisible('@title')
      .assert.containsText('@title', 'Корзина')

    let cr = client.globals.credentials;
    let card = cr.card;

    cartPage
      .setValue('@orderName', cr.name)
      .setValue('@orderEmail', cr.email)
      .setValue('@orderPass', cr.pass);

    cartPage
      .setValue('@orderCardNum', card.number)
      .setValue('@orderCardName', card.name)
      .setValue('@orderCardExp', card.expiration)
      .setValue('@orderCardCVC', card.ccv);

    cartPage
      .assert.not.elementPresent('@orderLine1')

    cartPage.waitForElementAndClick('@btnPay')

    cartPage
      .waitForElementVisible('@alertCartEmpty')
      .waitForElementVisible('@orderLine1')

  },



};