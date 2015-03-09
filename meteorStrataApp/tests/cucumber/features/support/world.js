(function() {

	'use strict';

	module.exports = function() {

		var helper = this;

		this.World = function(next) {

			helper.world = this;

			helper.world.cucumber = Package['xolvio:cucumber'].cucumber;

			Package['xolvio:webdriver'].wdio.getGhostDriver(function(browser) {
				helper.world.browser = browser;
				browser.call(next);
			});

			var options = {
				desiredCapabilities: {
					browserName: 'PhantomJs'
				},
				port: 4444,
				logLevel: 'silent'
			};



		};

	};

})();
