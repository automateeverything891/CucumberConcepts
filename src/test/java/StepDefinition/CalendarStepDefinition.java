package StepDefinition;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class CalendarStepDefinition {

	public WebDriver driver;
	
	@Given("^user is in login page2$")
	public void user_is_in_login_page2(DataTable URL){
		WebDriverManager.chromedriver().setup();
	    driver = new ChromeDriver();
	    driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	    driver.manage().window().maximize();
	    
		List<List<String>> url = URL.raw();
		driver.get(url.get(0).get(0));
	    }
		
		@When("^title of the login page is FreeCRM2$")
		public void title_of_the_login_page_is_FreeCRM2() {
			String title = driver.getTitle();
			System.out.println(title);
			//Assert.assertEquals(title, "ui.freecrm.com");
		}
		
		@Then("^user Logins2$")
		public void user_Logins2(DataTable credentials) {
			List<List<String>> usercredentials = credentials.raw();
			driver.findElement(By.xpath("//input[@name='email']")).sendKeys(usercredentials.get(0).get(0));
			driver.findElement(By.xpath("//input[@name='password']")).sendKeys(usercredentials.get(0).get(1));
			driver.findElement(By.xpath("//div[text()='Login']")).click();
		}
	
		@And ("click on Calendar and Validate page2$")
		public void click_on_Calendar_and_Validate_page2() {
			driver.findElement(By.xpath("//span[text()='Calendar']")).click();
			String Calendar = driver.findElement(By.xpath("//div[text()='Calendar']")).getText();
			System.out.println(Calendar);
			Assert.assertEquals(Calendar, "Calendar");
			driver.close();
		}

}
