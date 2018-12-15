const assert = require('assert');
const HomePageObject = require('../../pages/HomePageObject').default;
const HomeConfig = require('../../configs/HomeConfig.json');
const NewFlightPageObject = require('../../pages/NewFlightPageObject').default;
const NewFlightConfig = require('../../configs/NewFlightConfig.json');
const SignInPageObject = require('../../pages/SignInPageObject').default;
const SignInConfig = require('../../configs/SignInConfig.json');

describe('Create New Flight', () => {
    let homePageObject = new HomePageObject(HomeConfig);
    let newFlightPageObject= new NewFlightPageObject(NewFlightConfig);
    let signInPageObject = new SignInPageObject(SignInConfig);

    it('Navigate to + New Flight page', () => {
        homePageObject.navigateToHomePage();
        homePageObject.clickOnSignInButton();
        signInPageObject.setEmail("eduardo@mail.com");
        signInPageObject.setPassword("123456");
        signInPageObject.signIn();
        homePageObject.clickOnNewFlightButton();
        let header = newFlightPageObject.getHeaderText();
        console.log(header);
        assert.equal('Create New Flight', header);
    });
    it('Create New Flight', () => {
        newFlightPageObject.setDestination("Los Angeles");
        newFlightPageObject.setStartTime('2018-12-13T02:00');
        newFlightPageObject.setDuration("45");
        newFlightPageObject.setCapacity('104');
        newFlightPageObject.findAvailAirplane();
        newFlightPageObject.selectAirplane();
        newFlightPageObject.findAvailLane();
        newFlightPageObject.selectLane();

    });


});