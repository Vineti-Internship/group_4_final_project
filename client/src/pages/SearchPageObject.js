const BasePageObject = require("./BasePageObject.js").default;

module.exports["default"] = class SearchPageObject extends BasePageObject{
	constructor(selector) {
		super();
		this.selector = selector;
		}
		
		getCardBody(index){
			return this.getValue(this.selector.card, index);
		}
		clickMoreButton(){
			this.click(this.selector.moreButton);
		}
		// getCardTitle(){
		// 	return browser.element(this.selector.cardTitle).getText();
		// }
}