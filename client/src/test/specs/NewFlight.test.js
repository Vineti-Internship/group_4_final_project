const assert = require('assert');
const HomePageObject = require('../../pages/HomePageObject').default;
const HomeConfig = require('../../configs/HomeConfig.json');
const NewFlightPageObject = require('../../pages/NewFlightPageObject').default;
const NewFlightConfig = require('../../configs/NewFlightConfig.json');


describe('Create New Flight', () => {
    let homePageObject = new HomePageObject(HomeConfig);
    let newFlightPageObject= new NewFlightPageObject(NewFlightConfig);
    it('Create new flight', () => {
        homePageObject.navigateToHomePage();
        homePageObject.clickOnNewFlightButton();
        let header = newFlightPageObject.getHeaderText();
        console.log(header);
        assert.equal('Create New Flight', header);
    });
});