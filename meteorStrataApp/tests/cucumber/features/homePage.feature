Feature: Strata App Home Page

@desktop
Scenario: Home Page Initial Start
	Given I am on the home page
	When I navigate to ""
	Then I should see the home page title of "Weclome to StrataApp"
