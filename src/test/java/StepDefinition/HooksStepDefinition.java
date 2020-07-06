package StepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HooksStepDefinition {
	
	@Given ("^this is First step$")
	public void this_is_First_step(){
		System.out.println("First Step");
	}
	@When ("^this is Second Step$")
	public void this_is_Second_Step(){
		System.out.println("Second Step");
	}
	@Then ("^this is Third Step$")
	public void this_is_Third_Step(){
		System.out.println("Third Step");
	}

}
