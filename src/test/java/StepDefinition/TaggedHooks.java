package StepDefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class TaggedHooks {
	
	 @Before ("@First")
	 public void beforeFirstScenario(){
	 System.out.println("This will run before First Scenario");
	   }
	 @After ("@First")
	 public void afterFirstScenario(){
	 System.out.println("This will run after First Scenario");
	   }
	 @Before ("@Second")
	 public void beforeSecondScenario(){
	 System.out.println("This will run before Second Scenario");
	   }
	 @After ("@Second")
	 public void afterSecondScenario(){
	 System.out.println("This will run after Second Scenario");
	   }
	 @Before ("@Third")
	 public void beforeThirdScenario(){
	 System.out.println("This will run before Third Scenario");
	   }
	 @After ("@Third")
	 public void afterThirdScenario(){
	 System.out.println("This will run after Third Scenario");
	   }	 	 
}
