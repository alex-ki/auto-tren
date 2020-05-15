const searchCommands = {
  submit_old() {
    this
      .waitForElementVisible('@submitButton', 1000)
      .click('@submitButton')
      .api.pause(1000);

    return this; // Return page object for chaining
  },

  submit() {
    this.sendKeys('@searchBar', [this.api.Keys.ENTER]);
    return this;
  }
};

module.exports = {
  url: 'https://www.google.ru/',
  commands: [searchCommands],
  elements: {
    searchBar: {selector: 'input[name=q]'},
    submitButton: {selector: 'input[value="Google Search"]'}
  }
};