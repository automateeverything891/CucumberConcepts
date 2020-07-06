package StepDefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	
	 @Before
	 public void beforeScenario(){
	 System.out.println("This will run before each Scenario");
	   }
	 @After
	 public void afterScenario(){
	 System.out.println("This will run after each Scenario");
	   }
}
