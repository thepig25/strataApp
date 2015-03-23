(function() {

	'use strict';

	var assert = require('assert');

	module.exports = function() {

		var helper = this;

		this.Given(/^I am on the Blog Page$/, function(callback) {
			helper.world.browser.
			url(helper.world.cucumber.mirror.rootUrl).
			call(callback);
		});

		this.When(/^I navigate to "([^"]*)"$/, function(relativePath, callback) {
			helper.world.browser.
			url(helper.world.cucumber.mirror.rootUrl + relativePath).
			call(callback);
		});


		this.Then(/^I should see a form for new blog posts with a class of "([^"]*)"$/, function(expectedForm, next) {
			helper.world.browser
			.waitFor('.newBlogPostForm',600)
			.isExisting(expectedForm, function(err, isExisting) {
				if (!isExisting) {
					next.fail('The Element ' + expectedForm + ' is not existing on the page');
				} else {
					next();
				}

			});

		});

		this.When(/I enter a post in the textarea with a class of "([^"]*)"$/, function(className, next) {
			helper.world.browser
			.waitFor(className,600)
			.setValue(className,'A new Test Post')
			.call(next);

		});

		this.Then(/^I submit the form$/, function(next) {
			helper.world.browser
			.submitForm('.newBlogPostForm')
			.call(next);

		});

		this.Then(/The blog post value should be "([^"]*)"$/, function(blogValue, next) {
			helper.world.browser
			.waitFor('.newBlogPostForm',600)
			.getText('.blogPostValue', function(error, actualValue) {
				if (actualValue !== blogValue) {
					next.fail('The Blog post value' + actualValue + ' did not match ' + blogValue);
				} else {
					next();
				}
			});

		});

		this.Then(/The blog post user should be "([^"]*)"$/, function(blogUser, next) {
			helper.world.browser
			.waitFor('.newBlogPostForm',600)
			.getText('.blogPostUser', function(error, actualUser) {
				if (actualUser !== blogUser) {
					next.fail('The Blog post value' + actualUser + ' did not match ' + blogUser);
				} else {
					next();
				}
			});

		});

		this.When(/^I click on the delete post button$/, function(next) {
			helper.world.browser
			.waitFor('.newBlogPostForm',600)
			.click('.delete')
			.call(next);

		});

		this.Then(/^There should be no blog posts present$/, function(next) {
			helper.world.browser
			.isExisting('.blogPostRow', function(err, isExisting) {
				if (!isExisting) {
					next();
				} else {
					next.fail('The Element ' + '.blogPostRow' + ' is existing the post was not deleted');
				}

			});

		});




	};

})();
