package StepDefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HooksExecutionOrder {

	 @Before (order=0)
	 public void beforeFirstScenario(){
	 System.out.println("Before order=0");
	   }
	 @After (order=0)
	 public void afterFirstScenario(){
	 System.out.println("After order=0");
	   }
	 @Before (order=1)
	 public void beforeSecondScenario(){
	 System.out.println("Before order=1");
	   }
	 @After (order=1)
	 public void afterSecondScenario(){
	 System.out.println("After order=1");
	   }

}
