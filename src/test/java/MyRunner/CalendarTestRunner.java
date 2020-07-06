package MyRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"D:\\Selenium\\CucumberConcepts\\src\\main\\java\\Feature\\calendar.feature"},
		        // path of the feature file
		glue= {"StepDefinition"},
				// path of the step definition file
		monochrome = true, 
				// to display the console output in a proper readable format
		dryRun = false)
                //to check the mapping is proper between feature file and step definition file
public class CalendarTestRunner {

}
