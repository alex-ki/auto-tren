module.exports = {
  'Demo test Google' : function (client) {
    client
      .url('http://google.com')
      .waitForElementPresent('body', 1000)
      .setValue('input[type=text]', ['Nightwatch.js', client.Keys.ENTER])
      .pause(1000)
      .assert.containsText('#main', 'Nightwatch.js')
      .end();
  }
};