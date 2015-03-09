(function() {

	'use strict';

	module.exports = function() {

		var helper = this;

		this.World = function(next) {

			helper.world = this;

			helper.world.cucumber = Package['xolvio:cucumber'].cucumber;

			Package['xolvio:webdriver'].wdio.getChromeDriver(function(browser) {
				helper.world.browser = browser;
				browser.call(next);
			});



		};

	};

})();
