const assert = require('assert');
const HomePageObject = require('../../pages/HomePageObject').default;
const HomeConfig = require('../../configs/HomeConfig.json');
const NewFlightPageObject = require('../../pages/NewFlightPageObject').default;
const NewFlightConfig = require('../../configs/NewFlightConfig.json');


describe('Create New Flight', () => {
    let homePageObject = new HomePageObject(HomeConfig);
    let newFlightPageObject= new NewFlightPageObject(NewFlightConfig);
    it('Navigate to + New Flight page', () => {
        homePageObject.navigateToHomePage();
        homePageObject.clickOnNewFlightButton();
        let header = newFlightPageObject.getHeaderText();
        console.log(header);
        assert.equal('Create New Flight', header);
    });
    it('Create New Flight', () => {
        newFlightPageObject.setDestination("New York");
        newFlightPageObject.setStartTime('2018-12-13T02:00');
        newFlightPageObject.setDuration("45");
        newFlightPageObject.setCapacity('104');
        newFlightPageObject.findAvailAirplane();
        newFlightPageObject.selectAirplane();
        let text1 = newFlightPageObject.getCapacity();
        let cap1 = text1.split(' ')[1];
        console.log(cap1);
        if(cap1 > 100){
            newFlightPageObject.findAvailLane();
            newFlightPageObject.selectLane();
            let text2 = newFlightPageObject.getCapacity();
            let cap2 = text2.split(' ')[1];
            console.log(cap2);
            if(cap2 > 100){
                newFlightPageObject.createFlightButton();
            }
            else{
                assert.fail();
            }
        }
        else{
            assert.fail();
        }
    });
});