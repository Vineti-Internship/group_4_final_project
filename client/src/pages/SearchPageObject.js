const BasePageObject = require("./BasePageObject.js").default;

module.exports["default"] = class SearchPageObject extends BasePageObject{
	constructor(selector) {
		super();
		this.selector = selector;
    }
}