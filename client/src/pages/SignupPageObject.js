const BasePageObject = require('./BasePageObject.js').default;

module.exports['default'] = class SignupPageObject extends BasePageObject{
    constructor(selector) {
        super();
        this.selector = selector;
    }

    fillInName(){
        this.setValue(this.selector.nameInput, "Mane Poghosian");
    }
    fillInEmail(){
        this.setValue(this.selector.emailInput, "tester2@gmail.com");
    }
    fillInPassword(){
        this.setValue(this.selector.passwordInput, "password");
    }
    fillInPassConf(){
        this.setValue(this.selector.passConfInput, "password");
    }
    clickRegisterButton(){
        console.log("yaaa yaaaa yaaaaaaaaa");
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
}