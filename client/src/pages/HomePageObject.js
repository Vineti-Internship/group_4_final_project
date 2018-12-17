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

    clickOnProfileButton(){
        this.click(this.selector.profileButton);
    }

    clickOnSearchButton(){
        this.click(this.selector.searchButton);
    }

    clickOnNewFlightButton(){
        this.click(this.selector.newFlightButton);
    }

    clickOnSignInButton(){
        this.click(this.selector.signInButton);
    }

    setFrom(from){
        this.setValue(this.selector.fromInput, from);
    }
    
    setTo(to){
        this.setValue(this.selector.toInput, to);
    }

    getLastCreatedFlightDest(){
        return browser.element(this.selector.lastCreatedFlight).getText().split(' ')[1];
    }

    getLastCreatedFlightTime(){
        return browser.element(this.selector.lastCreatedFlight).getText().split(' ')[3];
    }

    clickOnSignOutButton(){
        this.click(this.selector.signOutButton);
    }
    clickOnRefreshButton(){
        this.click(this.selector.refreshButton);
    }
    clickOnLanesButton(){
        this.click(this.selector.lanesButton);
    }
}