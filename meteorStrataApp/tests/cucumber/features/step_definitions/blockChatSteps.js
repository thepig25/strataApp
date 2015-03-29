(function() {

	'use strict';

	var assert = require('assert');

	module.exports = function() {

		var helper = this;

		this.Given(/^I am on the Chat Page$/, function(callback) {
			helper.world.browser.
			url(helper.world.cucumber.mirror.rootUrl).
			call(callback);
		});

		this.When(/^I navigate to "([^"]*)"$/, function(relativePath, callback) {
			helper.world.browser.
			url(helper.world.cucumber.mirror.rootUrl + relativePath).
			call(callback);
		});

		this.Then(/^I should see a input for new chat messages with an id of "([^"]*)"$/, function(expectedForm, next) {
			helper.world.browser
				.waitFor('#message', 200)
				.isExisting(expectedForm, function(err, isExisting) {
					if (!isExisting) {
						next.fail('The Element ' + expectedForm + ' is not existing on the page');
					} else {
						next();
					}

				});

		});

		this.Then(/^I select a user to text$/, function(callback) {
			helper.world.browser
				.waitFor('.loggedOutUser', 200)
				.click('.loggedOutUser')
				.call(callback);
		});

		this.Then(/^I enter a message of "([^"]*)"$/, function(messageText, callback) {
			helper.world.browser
				.waitFor('.form-control', 200)
				.setValue('.form-control', messageText)
				.click('.sendChatMessage')
				.call(callback);
		});

	};

})();
