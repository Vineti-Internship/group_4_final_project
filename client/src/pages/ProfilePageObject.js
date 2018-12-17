const BasePageObject = require("./BasePageObject.js").default;

module.exports["default"] = class NewFlightPageObject extends BasePageObject{
	constructor(selector) {
		super();
		this.selector = selector;
        }
    getProfileEmail(){
        return  browser.element(this.selector.profileEmail).getText();
    }
}