const BasePageObject = require('./BasePageObject.js').default;

module.exports['default'] = class SignupPageObject extends BasePageObject{
    constructor(selector) {
        super();
        this.selector = selector;
    }

    setName(userName){
        this.setValue(this.selector.nameInput, userName);
    }
    setEmail(userEmail){
        this.setValue(this.selector.emailInput, userEmail);
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
    getPassShortText(){
        return browser.element(this.selector.passShortLabel).getText();
    }
    getPassDidntMatchText(){
        return browser.element(this.selector.passDidntMatch).getText();
    }
    setPassword(str1){
        this.setValue(this.selector.passwordInput, str1);
    }
    setPassConf(str2){
        this.setValue(this.selector.passConfInput, str2);
    }
}