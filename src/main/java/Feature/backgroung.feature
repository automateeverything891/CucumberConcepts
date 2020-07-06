Feature: Test Background

Background: User is Logged In
 Given user navigates to the login page
 | https://ui.freecrm.com/ |
 When user submit username and password
 | josephkuruvilla891@gmail.com | Jakay07@ |
 Then user is logged in
 
Scenario: Create Event
Given navigate to Create New Event page
When user submits Calendar details
| New Event Calendar |
Then calendar should be created

Scenario: Create Contact
Given navigate to Create New Contact page
When user submits contact details
| FirstName | LastName |
| Admin | Super |
Then contact should be created
