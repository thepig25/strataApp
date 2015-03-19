
Feature: Strata App Tennant Blog Page



Background: Initial State
	Given I am on the Blog Page
	When I navigate to "tenantBlog"
	Then Logout if already signed in
	Then I login from a mobile

Scenario: Initial State Mobile
	Then I should see a form for new blog posts with a class of ".newBlogPostForm"

Scenario: Adding a new Blog Post
	When I enter a post in the textarea with a class of ".addNewBlogPost"
	Then I submit the form
	Then The blog post value should be "A new Test Post"
	Then The blog post user should be "testuser"

Scenario: Deleting a Blog Post
	When I click on the delete post button
	Then There should be no blog posts present


