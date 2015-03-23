(function() {

	'use strict';

	var assert = require('assert');

	module.exports = function() {

		var helper = this;

		this.Then(/^Logout if already signed in$/, function(callback) {
			helper.world.browser
				.isExisting('#login-name-link', function(err, isExisting) {
					if (!isExisting) {
						callback();

					} else {
							this.click('#login-name-link')
							.waitFor('#login-buttons-logout', 300)
							.click('#login-buttons-logout')
							.call(callback);
					}

				});
		});



		this.Then(/^I login from a mobile$/, function(callback) {
			helper.world.browser
				.waitFor('#login-sign-in-link',600)
				.click('#login-sign-in-link')
				.waitFor('#login-username', 100)
				.click('#login-username')
				.setValue('#login-username', 'testuser')
				.setValue('#login-password', 'password')
				.click('#login-buttons-password')
				.call(callback);


		});

		this.Then(/^I login from a desktop$/, function(callback) {
			helper.world.browser
				.waitFor('#login-sign-in-link', 500)
				.click('#login-sign-in-link')
				.click('#login-username')
				.setValue('#login-username', 'testuser')
				.setValue('#login-password', 'password')
				.click('#login-buttons-password')
				.call(callback);


		});

	};

})();
