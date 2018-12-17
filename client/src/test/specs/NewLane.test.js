const assert = require('assert');
const HomePageObject = require('../../pages/HomePageObject').default;
const HomeConfig = require('../../configs/HomeConfig.json');
const SignInPageObject = require('../../pages/SignInPageObject').default;
const SignInConfig = require('../../configs/SignInConfig.json');
const NewLanePageObject = require('../../pages/NewLanePageObject').default;
const NewLaneConfig = require('../../configs/NewLaneConfig.json');


describe('New Lane Creation', () => {
    let homePageObject = new HomePageObject(HomeConfig);
    let signInPageObject = new SignInPageObject(SignInConfig);
    let newLanePageObject = new NewLanePageObject(NewLaneConfig);
    const userEmail = 'benedict@mail.com';
    const userPassword = '123456';
    it('Sign In as Benedict, create new lane', () => {
        homePageObject.navigateToHomePage();
        homePageObject.clickOnSignInButton();
        signInPageObject.setEmail(userEmail);
        signInPageObject.setPassword(userPassword);
        signInPageObject.signIn();
        homePageObject.clickOnLanesButton();
        newLanePageObject.clickOnCreateLane();
        newLanePageObject.setCapacity(100);
        newLanePageObject.clickOnCreateButton();
        //newLanePageObject.getLanes();
    });
    
});