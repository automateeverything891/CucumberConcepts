package StepDefinition;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class BackgroundSTepDefinition {
	public WebDriver driver;

	@Given ("^user navigates to the login page$")
	public void user_navigates_to_the_login_page(DataTable URL) {
		WebDriverManager.chromedriver().setup();
	    driver = new ChromeDriver();
	    driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	    driver.manage().window().maximize();
		List<List<String>> url = URL.raw();
		WebDriverManager.chromedriver().setup();
		driver.get(url.get(0).get(0));
		String title = driver.getTitle();
		System.out.println(title);
		//Assert.assertEquals(title, "ui.freecrm.com");
	}

	@When("^user submit username and password$")
	public void user_submit_username_and_password(DataTable credentials) {
		List<List<String>> usercredentials = credentials.raw();
		driver.findElement(By.xpath("//input[@name='email']")).sendKeys(usercredentials.get(0).get(0));
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(usercredentials.get(0).get(1));
		driver.findElement(By.xpath("//div[text()='Login']")).click();
	}

	@Then("^user is logged in$")
	public void user_is_logged_in() {
		String homepage = driver.findElement(By.xpath("//span[text()='Home']")).getText();
		System.out.println(homepage);
		Assert.assertEquals(homepage, "Home");
	}
	
	@Given ("^navigate to Create New Event page$")
	public void navigate_to_Create_New_Event_page() {
		driver.findElement(By.xpath("//span[text()='Calendar']")).click();
		String Calendar = driver.findElement(By.xpath("//div[text()='Calendar']")).getText();
		System.out.println(Calendar);
		Assert.assertEquals(Calendar, "Calendar");
		driver.findElement(By.xpath("//button[text()='New']")).click();
	}

	@When("^user submits Calendar details$")
	public void user_submits_Calendar_details(DataTable details) {
		List<List<String>> calendarDetails = details.raw();
		driver.findElement(By.xpath("//input[@name='title']")).sendKeys(calendarDetails.get(0).get(0));
		driver.findElement(By.xpath("//div[@name='calendar']")).click();
		driver.findElement(By.xpath("//div[text()='Jakay M <josephkuruvilla891@gmail.com>']")).click();
		driver.findElement(By.xpath("//button[text()='Save']")).click();
	}

	@Then("^calendar should be created$")
	public void calendar_should_be_created() {
		driver.findElement(By.xpath("//button[text()='Save']")).click();
		driver.close();
	}
	
	@Given ("^navigate to Create New Contact page$")
	public void navigate_to_Create_New_Contact_page() {
		driver.findElement(By.xpath("//span[text()='Contacts']")).click();
		String Contacts = driver.findElement(By.xpath("//div[text()='Contacts']")).getText();
		System.out.println(Contacts);
		Assert.assertEquals(Contacts, "Contacts");
		driver.findElement(By.xpath("//button[text()='New']")).click();
	}

	@When("^user submits contact details$")
	public void user_submits_contact_details(DataTable details) {
		for(Map<String, String> contactDetails : details.asMaps(String.class, String.class)) {
		driver.findElement(By.xpath("//span[text()='Contacts']")).click();
		driver.findElement(By.xpath("//button[text()='New']")).click();
		driver.findElement(By.xpath("//input[@name='first_name']")).sendKeys(contactDetails.get("FirstName"));
		driver.findElement(By.xpath("//input[@name='last_name']")).sendKeys(contactDetails.get("LastName"));
		driver.findElement(By.xpath("//button[text()='Save']")).click();
		}
	}

	@Then("^contact should be created$")
	public void contact_should_be_created() {
		driver.findElement(By.xpath("//button[text()='Save']")).click();
		driver.close();
	}

}
