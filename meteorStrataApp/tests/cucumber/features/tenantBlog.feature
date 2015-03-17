
Feature: Strata App Blog Page

@mobile
Background: Tennant Blog Initial State Mobile
	Given I am on the Blog Page
	When I navigate to "tenantBlog"
	Then I login from a mobile

@mobile
Scenario: Tennant Blog Initial State Mobile
	Then I should see a form for new blog posts with a class of ".new-task"

@desktop
Background: Tennant Blog Initial State Desktop
	Given I am on the Blog Page
	When I navigate to "tenantBlog"
	Then I login from a desktop

@desktop
Scenario: Tennant Blog Initial State Desktop
	Then I should see a form for new blog posts with a class of ".new-task"

