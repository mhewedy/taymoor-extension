
var array = [];
var button = undefined;

var inputFn = function(){
	var self = $(this);
	
	var index = array.findIndex(function(e){
		return JSON.stringify(self) == JSON.stringify(e);
	});

    if (index > -1){
        array.splice(index, 1);
        effect(self, false);
    }else{
        array.push(self);
        effect(self, true);
    }
}

var buttonFn = function(){
	var self = $(this);

    if (button === undefined ){
        button = self;
        effect(self, true, 'button');
    }else{
        effect(button, false, 'button');
        button = undefined;
    }
}

function effect(e, set, type){
    e.css('border-color', set? (type == 'button'? 'black': 'red'): '');
    e.css('border-style', set? 'solid': '');
    e.css('border-width', set? '4px': '');
}

$("body" ).prepend( "<button style='width: 100%;height: 60px;color: red;background-color: black;font-size: x-large;' id='generateBtn'> Generate </button>" );

$('input').click(inputFn);

$(':button').contextmenu(buttonFn);
$('a').contextmenu(buttonFn);

$('#generateBtn').click(() => {

    var title = $(document).find("title").text();
    var arrayStr = array.map(e => `\t@FindBy(how = ID , using = "${(e[0].id).cleanup()}")\n\tpublic WebElement ${(e[0].id).cleanup()};\n`).join('\n\n');

    var template= `
// ---- start of the generated file
// by taymoor generation tool
package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import static org.openqa.selenium.support.How.*;

import common.Helper;

public class ${title} extends PageObject{
	
	private WebDriver driver;
	 
${arrayStr}
	
	@FindBy(how = ID , using = "${(button[0].id).cleanup()}")
	public WebElement submit;
	
	
	public ${title}(WebDriver driver){
		this.driver=driver;
	 }
	 
	public void fill(){
		// mobileNumber.sendKeys("966536961082");
        // TODO

		submit.click();
	}
}
// ---- end of the generated file
`;
    console.log(template);
    alert('Open the chrome console to see the generated java code')
});


String.prototype.cleanup = function() {
   return this.toLowerCase().replace(/[^a-zA-Z]+/g, "");
}
