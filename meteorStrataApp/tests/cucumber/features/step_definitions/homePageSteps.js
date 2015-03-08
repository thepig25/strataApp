(function() {

    'use strict';

    var assert = require('assert');

    module.exports = function() {

        var helper = this;
        var homePageTitle = '.welcome h2';

        this.Given(/^I am on the home page$/, function(callback) {
            helper.world.browser.
            url(helper.world.cucumber.mirror.rootUrl).
            call(callback);
        });

        this.When(/^I navigate to "([^"]*)"$/, function(relativePath, callback) {
            helper.world.browser.
            url(helper.world.cucumber.mirror.rootUrl + relativePath).
            call(callback);
        });

        this.Then(/^I should see the page title of "([^"]*)"$/, function(expectedTitle, next) {
            var world = helper.world;
            world.browser.
            getText(homePageTitle, function(error, actualTitle) {
                if (actualTitle !== expectedTitle) {
                    next.fail('' + actualTitle + ' did not match ' + expectedTitle);
                } else {
                    next();
                }
            });

        });



    };

})();
