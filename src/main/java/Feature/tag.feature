Feature: Test Tags

@SmokeTest
Scenario: Valid login
Given navigate to Login page "https://ui.freecrm.com/"
When user is in login page
Then user logins using valid credentials "josephkuruvilla891@gmail.com" and "Jakay07@"
And home page should be displayed

@RegressionTest
Scenario Outline: Invalid Login
Given navigate to Login page "https://ui.freecrm.com/"
When user is in login page
Then user logins using invalid "<username>" and "<password>"
But user should not be able to login
Examples:
| username| password |
| josephkuruvilla | Jakay07@ |
| josephkuruvilla891@gmail.com | jayay07|

@SmokeTest @RegressionTest
Scenario: Validate Calendar page
Given user is in login page2
| https://ui.freecrm.com/ |
When title of the login page is FreeCRM2
Then user Logins2
| josephkuruvilla891@gmail.com | Jakay07@ |
And click on Calendar and Validate page2

@SmokeTest @RegressionTest
Scenario: Validate Contacts page
Given user is in login page3
When title of the login page is FreeCRM3
Then user Logins3
| username | password |
| josephkuruvilla891@gmail.com | Jakay07@ |
And click on Contacts and Validate page3

@SmokeTest @RegressionTest @End2EndTest
Scenario: Create New Contact
Given user is in login page3
When title of the login page is FreeCRM3
Then user Logins3
| username | password |
| josephkuruvilla891@gmail.com | Jakay07@ |
And click on Contacts and Validate page3
And create Contact
| FirstName | LastName |
| Admin | Super |
| Admin | Services |