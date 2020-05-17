describe('Search test for Mocha', function() {

  describe('for demo purposes', function() {

    before(function(client, done) {
      client
        .resizeWindow(1280, 768)
        .setWindowPosition(0, 300);

      done();
    });

    after(function(client, done) {
      if (client.sessionId) {
        client.end(function() {
          done();
        });
      } else {
        done();
      }
    });

    it('Check catalog search', function(client) {
      const searchWord = 'Круиз', searchCount = 3;
      const catalogPage = client.page.catalog();
      catalogPage.navigate();
      catalogPage.waitForElementVisible('@title')

      catalogPage.setValue('@search', searchWord);
      client.elements('css selector', catalogPage.elements.infoCard.selector, (result) => {
        client.assert.equal(result.value.length, searchCount, 'Items: ' + result.value.length);
        result.value.forEach((el, i) =>
          catalogPage.assert.containsText(
            `@infoCard:nth-child(${i + 1}) .card-title`,
            searchWord,
            `Card #${i + 1} title has ${searchWord}`
          )
        );
      });

    });
  });
});
