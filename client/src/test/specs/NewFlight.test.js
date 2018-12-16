const assert = require('assert');
const HomePageObject = require('../../pages/HomePageObject').default;
const HomeConfig = require('../../configs/HomeConfig.json');
const NewFlightPageObject = require('../../pages/NewFlightPageObject').default;
const NewFlightConfig = require('../../configs/NewFlightConfig.json');
const SignInPageObject = require('../../pages/SignInPageObject').default;
const SignInConfig = require('../../configs/SignInConfig.json');
const SearchPageObject = require('../../pages/SearchPageObject').default;
const SearchConfig = require('../../configs/SearchConfig.json');

describe("New Flight creation and confirmation", () => {
    let homePageObject = new HomePageObject(HomeConfig);
    let newFlightPageObject= new NewFlightPageObject(NewFlightConfig);
    let signInPageObject = new SignInPageObject(SignInConfig);
    let searchPageObject = new SearchPageObject(SignInConfig);
    let email = "eduardo@mail.com";
    let pass = "123456";
    let destination = "London";
    //leave start time as default value
    let duration = 45;
    let capacity = 100;

    it('Navigate to + New Flight page', () => {
        homePageObject.navigateToHomePage();
        homePageObject.clickOnSignInButton();
        signInPageObject.setEmail(email);
        signInPageObject.setPassword(pass);
        signInPageObject.signIn();
        homePageObject.clickOnNewFlightButton();
        let header = newFlightPageObject.getHeaderText();
        console.log(header);
        assert.equal('Create New Flight', header);
    });
    it('Create New Flight', () => {
        newFlightPageObject.setDestination(destination);
        newFlightPageObject.setDuration(duration);
        newFlightPageObject.setCapacity(capacity);
        newFlightPageObject.findAvailAirplane();
        newFlightPageObject.waitForAirplaneToExist();
        newFlightPageObject.selectAirplane();
        newFlightPageObject.findAvailLane();
        newFlightPageObject.waitForLaneToExist();
        newFlightPageObject.selectLane();
        newFlightPageObject.createFlight();

        let flightDest = homePageObject.getLastCreatedFlight();
        console.log(flightDest);
        assert.equal(flightDest, destination);
    });


});