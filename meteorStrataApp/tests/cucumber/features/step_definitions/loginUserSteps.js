(function() {

	'use strict';

	var assert = require('assert');

	module.exports = function() {

		var helper = this;

		this.Then(/^I click on the signin button and sign in$/, function(callback) {
			helper.world.browser
			.waitFor('#login-sign-in-link',500)
			.click('#login-sign-in-link')
			.click('#login-username')
			.setValue('#login-username','testuser')
			.setValue('#login-password', 'password')
			.click('#login-buttons-password')
			.waitFor('.new-task',500)
			.call(callback);


		});

	};

})();
