
Feature: Strata App Block Chat Page



Background: Initial State
	Given I am on the Chat Page
	When I navigate to "blockChat"
	Then Logout if already signed in
	Then I login from a mobile

Scenario: Initial State of Chat Page
	Then I should see a input for new chat messages with an id of ".sendChatMessage"

