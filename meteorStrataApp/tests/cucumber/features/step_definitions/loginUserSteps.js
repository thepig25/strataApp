(function() {

	'use strict';

	var assert = require('assert');

	module.exports = function() {

		var helper = this;

		this.Then(/^I login from a mobile$/, function(callback) {
			helper.world.browser
			.waitFor('.navbar-toggle',100)
			.click('.navbar-toggle')
			.waitFor('#login-sign-in-link',100)
			.click('#login-sign-in-link')
			.click('#login-username')
			.setValue('#login-username','testuser')
			.setValue('#login-password', 'password')
			.click('#login-buttons-password')
			.call(callback);


		});

		this.Then(/^I login from a desktop$/, function(callback) {
			helper.world.browser
			.waitFor('#login-sign-in-link',100)
			.click('#login-sign-in-link')
			.click('#login-username')
			.setValue('#login-username','testuser')
			.setValue('#login-password', 'password')
			.click('#login-buttons-password')
			.call(callback);


		});

	};

})();
