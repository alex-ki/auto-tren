/**
 * Checks if the given element contains the specified text.
 *
 * ```
 *    this.demoTest = function (client) {
 *      browser.assert.containsText('#main', 'The Night Watch');
 *    };
 * ```
 *
 * @method containsText
 * @param {string} selector The selector (CSS / Xpath) used to locate the element.
 * @param {string} expectedText The text to look for.
 * @param {string} [message] Optional log message to display in the output. If missing, one is displayed by default.
 * @api assertions
 */

var util = require('util');
exports.assertion = function(selector, msg) {

  var MSG_ELEMENT_NOT_FOUND = 'Testing if element <%s> not empty. ' +
    'Element could not be located.';

  this.message = msg || util.format('Testing if element <%s> not empty.', selector);

  this.expected = function() {
    return '';
  };

  this.pass = function(value) {
    return value != '';
  };

  this.failure = function(result) {
    var failed = result === false || result && result.status === -1;
    if (failed) {
      this.message = msg || util.format(MSG_ELEMENT_NOT_FOUND, selector);
    }
    return failed;
  };

  this.value = function(result) {
    return result.value;
  };

  this.command = function(callback) {
    return this.api.getText(selector, callback);
  };

};
