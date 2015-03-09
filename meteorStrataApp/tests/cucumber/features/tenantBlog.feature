Feature: Strata App Blog Page

Background:
	Given I am on the Blog Page
	When I navigate to "tenantBlog"
	Then I click on the signin button and sign in


Scenario: Tennant Blog Initial State
	Then I should see a form for new blog posts with a class of ".new-task"
