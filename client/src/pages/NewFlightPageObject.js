const BasePageObject = require("./BasePageObject.js").default;

module.exports["default"] = class NewFlightPageObject extends BasePageObject{
	constructor(selector) {
		super();
		this.selector = selector;
		}
		getHeaderText(){
			return browser.element(this.selector.header).getText();
		}
		setDestination(param){
			this.setValue(this.selector.destinationn, param);
		}
		setStartTime(param){
			this.setValue(this.selector.flightStart, param);
		}
		setDuration(param){
			this.setValue(this.selector.duration, param);
		}
		setCapacity(param){
			this.setValue(this.selector.capacity, param);
		}
		findAvailAirplane(){
			this.click(this.selector.findAirplaneButton);
		}
		findAvailLane(){
			this.click(this.selector.findLaneButton);
		}
		selectAirplane(){
			this.click(this.selector.airplane);
		}
		getCapacity(){
			this.getValue(this.selector.airplaneFoundCap);
		}
		selectLane(){
			this.click(this.selector.lane);
		}
		getLaneCapacity(){
			this.getValue(this.selector.laneFoundCap);
		}
		createFlight(){
			this.click(this.selector.createFlightButton);
		}

		waitForAirplaneToExist(){
			browser.waitForExist(this.selector.airplane, 10000);
		}
		waitForLaneToExist(){
			browser.waitForExist(this.selector.lane, 10000);
		}
	
}