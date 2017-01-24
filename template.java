package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import static org.openqa.selenium.support.How.*;

import common.Helper;

public class AddDrivingAuthorizationPage extends PageObject{
	
	private WebDriver driver;
	 
	@FindBy(how = ID , using = "mainForm:mobileNumber")
	public WebElement mobileNumber;
	
	@FindBy(how = ID , using = "mainForm:mobileNumber")
	public WebElement submit;
	
	
	public AddDrivingAuthorizationPage(WebDriver driver){
		this.driver=driver;
	 }
	 
	public void fill(){
		mobileNumber.sendKeys("966536961082");
		submit.click();
	}
	
}
