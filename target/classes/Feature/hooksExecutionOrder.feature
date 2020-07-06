Feature: Test Hooks Execution Order

// Methods in HooksStepDefinition.java

Scenario: First Scenario
Given this is First step
When this is Second Step
Then this is Third Step

Scenario: Second Scenario
Given this is First step
When this is Second Step
Then this is Third Step