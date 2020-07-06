Feature: Login Features
Description: This feature will test a valid LogIn functionality

#Example for Data Driven without using Examples Keyword
Scenario: Valid login
Given navigate to Login page "https://ui.freecrm.com/"
When user is in login page
Then user logins using valid credentials "josephkuruvilla891@gmail.com" and "Jakay07@"
And home page should be displayed

#Example for Data Driven using Examples Keyword
Scenario Outline: Invalid Login
Given navigate to Login page "https://ui.freecrm.com/"
When user is in login page
Then user logins using invalid "<username>" and "<password>"
But user should not be able to login

Examples:
| username| password |
| josephkuruvilla | Jakay07@ |
| josephkuruvilla891@gmail.com | jayay07|

