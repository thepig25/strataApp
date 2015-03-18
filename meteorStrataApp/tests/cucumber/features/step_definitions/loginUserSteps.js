(function() {

	'use strict';

	var assert = require('assert');

	module.exports = function() {

		var helper = this;

		this.Then(/^I am signed out on mobile$/, function(callback) {
			helper.world.browser
			.waitFor('.navbar-toggle',100)
			.click('.navbar-toggle')
			.waitFor('#login-name-link',100)
			.click('#login-name-link')
			.waitFor('#login-buttons-logout',100)
			.click('#login-buttons-logout')
			.call(callback);
		});

		// this.Then(/^I am signed out on desktop$/, function(callback) {
		// 	helper.world.browser
		// 	.click('.navbar-toggle')
		// 	.waitFor('#login-name-link',100)
		// 	.click('#login-name-link')
		// 	.waitFor('#login-buttons-logout',100)
		// 	.click('#login-buttons-logout')
		// 	.call(callback);
		// });

		this.Then(/^I login from a mobile$/, function(callback) {
			helper.world.browser
			.waitFor('.navbar-toggle',100)
			.click('.navbar-toggle')
			.waitFor('#login-sign-in-link',100)
			.click('#login-sign-in-link')
			.waitFor('#login-username',100)
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
