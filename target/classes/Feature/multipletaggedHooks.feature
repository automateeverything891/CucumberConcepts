Feature: Test Multiple Tagged Hooks

// Methods in HooksStepDefinition.java

@First2
Scenario: First Scenario
Given this is First step
When this is Second Step
Then this is Third Step

@Second2
Scenario: Second Scenario
Given this is First step
When this is Second Step
Then this is Third Step

@Third2
Scenario: Third Scenario
Given this is First step
When this is Second Step
Then this is Third Step