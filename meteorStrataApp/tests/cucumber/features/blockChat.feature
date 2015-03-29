
Feature: Strata App Block Chat Page



Background: Initial State
	Given I am on the Chat Page
	When I navigate to "blockChat"


Scenario: Initial State of Chat Page
	Then I should see a input for new chat messages with an id of ".sendChatMessage"

Scenario: Sending a Message
	Then I select a user to text
	Then I enter a message of "Hello How are you"
