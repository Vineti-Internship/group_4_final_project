const assert = require('assert');
const HomePageObject = require('../../pages/HomePageObject').default;
const HomeConfig = require('../../configs/HomeConfig.json');
const SignInPageObject = require('../../pages/SignInPageObject').default;
const SignInConfig = require('../../configs/SignInConfig.json');

describe('Sign In', () => {
    let homePageObject = new HomePageObject(HomeConfig);
    let signInPageObject = new SignInPageObject(SignInConfig);
    it('Sign in as a user', () => {
        homePageObject.navigateToHomePage();
        homePageObject.clickOnSignInButton();
        signInPageObject.setEmail("eduardo@mail.com");
        signInPageObject.setPassword("123456");
        signInPageObject.signIn();
    });
});
