const BasePageObject = require("./BasePageObject.js").default;

module.exports["default"] = class SignupPageObject extends BasePageObject{
	constructor(selector) {
		super();
		this.selector = selector;
	}

	fillInName(){
		this.setValue(this.selector.nameInput, "Mane Poghosian");
	}
	fillInEmail(){
		this.setValue(this.selector.emailInput, "tester22@gmail.com");
	}
	fillInPassword(){
		this.setValue(this.selector.passwordInput, "password");
	}
	fillInPassConf(){
		this.setValue(this.selector.passConfInput, "password");
	}
	clickRegisterButton(){
		this.click(this.selector.registerButton);
	}
	getHeaderText(){
		return browser.element(this.selector.registrationH1).getText();
	}
	waitUntilH1Exists(){
		browser.waitForExist(this.selector.registrationH1, 10000);
	}
	getEmailTakenText(){
		return browser.element(this.selector.emailTakenLabel).getText();
	}
	setInvalidPass(){
		this.setValue(this.selector.passwordInput, "12345");
	}
	confInvalidPass(){
		this.setValue(this.selector.passConfInput, "12345");
	}
	getPassShortText(){
		return browser.element(this.selector.passShortLabel).getText();
	}
};