const BasePageObject = require("./BasePageObject.js").default;

module.exports["default"] = class NewFlightPageObject extends BasePageObject{
	constructor(selector) {
		super();
		this.selector = selector;
        }
        clickOnCreateLane(){
            this.click(this.selector.createLane);
        }
        setCapacity(cap){
            this.setValue(this.selector.capacity, cap);
        }
        clickOnCreateButton(){
            this.click(this.selector.createButton);
        }
        getLanes(){
            this.getValue(this.selector.allLanes);
        }
    }