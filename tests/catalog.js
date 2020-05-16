var request = require('request');

module.exports = {
  tags: ['catalog', 'integratioin'],
  before: function (client) {
    client
      .resizeWindow(1280, 768)
      .setWindowPosition(0, 0);
  },

  after: function (client) {
    client.end();
  },

  'Check catalog consistency' : function (client) {
    var catalogPage = client.page.catalog();
    catalogPage.navigate();
    catalogPage.waitForElementVisible('@title')

    client.elements('css selector', catalogPage.elements.infoCard.selector, (result) => {
      client.assert.ok(result.value.length > 0, 'Items: ' + result.value.length);
      result.value.forEach((el, i) => {
        catalogPage.verify.visible(`@infoCard:nth-child(${i + 1}) > img`, `Card #${i+1} has image`);

        catalogPage
          .getAttribute(`@infoCard:nth-child(${i + 1}) > img`, 'src', async (result) => {
            if (result.status != 0 || result.value == null) return;
            await request(result.value, (error, response, body) => {
              client.verify.ok(response.statusCode == 200, `Card #${i + 1} img available ${result.value}`);
            });
          });

        catalogPage
          .getText(`@infoCard:nth-child(${i + 1}) .card-title`, (result) =>
            client.verify.ok(result.value.length > 5, `Card #${i + 1} has title len: ${result.value.length}`))
          .getText(`@infoCard:nth-child(${i + 1}) .card-text`, (result) =>
            client.verify.ok(result.value.length > 5, `Card #${i + 1} has text len: ${result.value.length}`));

        catalogPage
          .getText(catalogPage.elCardDates(i+1), (result) =>
            client.verify.ok(result.value.length > 5, `Card #${i + 1} has dates: ${result.value}`))
          .getText(catalogPage.elCardPrice(i+1), (result) =>
            client.verify.ok(result.value.length > 5, `Card #${i + 1} has price: ${result.value}`));

      });

    });


  }
};