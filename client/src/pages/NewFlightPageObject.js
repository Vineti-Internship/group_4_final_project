const BasePageObject = require("./BasePageObject.js").default;

module.exports["default"] = class NewFlightPageObject extends BasePageObject{
	constructor(selector) {
		super();
		this.selector = selector;
		}
	
		getHeaderText(){
			return browser.element(this.selector.header).getText();
		}
}