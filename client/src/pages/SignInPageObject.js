const BasePageObject = require("./BasePageObject.js").default;

module.exports["default"] = class SignInPageObject extends BasePageObject{
	constructor(selector) {
		super();
		this.selector = selector;
    }
    setEmail(email){
        this.setValue(this.selector.email, email);
    }
    setPassword(password){
        this.setValue(this.selector.password, password);
    }
    signIn(){
        this.click(this.selector.signIn);
    }
    getHeaderText(){
        return browser.element(this.selector.header).getText();
    }
}