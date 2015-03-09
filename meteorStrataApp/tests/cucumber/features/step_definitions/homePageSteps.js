(function() {

	'use strict';

	var assert = require('assert');

	module.exports = function() {

		var helper = this;
		var homePageTitle = '.welcome h2';
		var world = helper.world;

		this.Given(/^I am on the home page$/, function(callback) {
			world.browser.
			url(helper.world.cucumber.mirror.rootUrl).
			call(callback);
		});

		this.When(/^I navigate to "([^"]*)"$/, function(relativePath, callback) {
			world.browser.
			url(helper.world.cucumber.mirror.rootUrl + relativePath).
			call(callback);
		});

		this.Then(/^I should see the page title of "([^"]*)"$/, function(expectedTitle, next) {
			world.browser.
			getText(homePageTitle, function(error, actualTitle) {
				if (actualTitle !== expectedTitle) {
					next.fail('' + actualTitle + ' did not match ' + expectedTitle);
				} else {
					next();
				}
			});

		});

		this.Then(/^the page should have a head title of "([^"]*)"$/, function(expectedTitle, next) {
			world.browser.
			getTitle(function(error, title) {
				if (title !== expectedTitle) {
					next.fail('' + title + ' did not match ' + expectedTitle);
				} else {
					next();
				}
			});

		});



	};

})();
