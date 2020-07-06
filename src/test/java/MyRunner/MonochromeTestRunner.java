package MyRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"D:\\Selenium\\CucumberConcepts\\src\\main\\java\\Feature"},
		        // path of the feature file
		glue= {"StepDefinition"},
				// path of the step definition file
		monochrome = true) 
//      monochrome = false)
				// to display the console output in a proper readable format
public class MonochromeTestRunner {
}
