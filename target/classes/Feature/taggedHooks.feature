Feature: Test Tagged Hooks

// Methods in HooksStepDefinition.java

@First
Scenario: First Scenario
Given this is First step
When this is Second Step
Then this is Third Step

@Second
Scenario: Second Scenario
Given this is First step
When this is Second Step
Then this is Third Step

@Third
Scenario: Third Scenario
Given this is First step
When this is Second Step
Then this is Third Step