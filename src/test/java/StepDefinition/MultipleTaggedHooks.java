package StepDefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class MultipleTaggedHooks {
	
	//Single Tagged Hooks
	 @Before ("@First2")
	 public void beforeFirstScenario(){
	 System.out.println("This will run before First2 Scenario");
	   }
	 @After ("@First2")
	 public void afterFirstScenario(){
	 System.out.println("This will run after First2 Scenario");
	   }
	 @Before ("@Second2")
	 public void beforeSecondScenario(){
	 System.out.println("This will run before Second2 Scenario");
	   }
	 @After ("@Second2")
	 public void afterSecondScenario(){
	 System.out.println("This will run after Second2 Scenario");
	   }
	 @Before ("@Third2")
	 public void beforeThirdScenario(){
	 System.out.println("This will run before Third2 Scenario");
	   }
	 @After ("@Third2")
	 public void afterThirdScenario(){
	 System.out.println("This will run after Third2 Scenario");
	   }
	 
	 //multiple Tagged Hooks
	 @Before ("@First2,@Second2,@Third2")
	 public void beforeFirstSecondThirdScenario(){
	 System.out.println("This will run before FirstSecondThird2 Scenario");
	   }
	 @After ("@First2,@Second2,@Third2")
	 public void afterFirstSecondThirdThirdScenario(){
	 System.out.println("This will run after FirstSecondThird2 Scenario");
	   }
}
