const BasePageObject = require('./BasePageObject.js').default;

module.exports['default'] = class HomePageObject extends BasePageObject{
    constructor(selector) {
        super();
        this.selector = selector;
    }

    navigateToHomePage(){
        browser.url("/");
    }
    
    clickOnSignupButton(){
        this.click(this.selector.signupButton);
    }

}