const assert = require('assert');
const HomePageObject = require('../../pages/HomePageObject').default;
const HomeConfig = require('../../configs/HomeConfig.json');
const SignInPageObject = require('../../pages/SignInPageObject').default;
const SignInConfig = require('../../configs/SignInConfig.json');
const ProfilePageObject = require('../../pages/ProfilePageObject').default;
const ProfileConfig = require('../../configs/ProfileConfig.json');


describe('Sign In', () => {
    let homePageObject = new HomePageObject(HomeConfig);
    let signInPageObject = new SignInPageObject(SignInConfig);
    let profilePageObject = new ProfilePageObject(ProfileConfig);
    it('Sign in as a user, confirm validity', () => {
        const userEmail = "mane@mail.com";
        const userPassword = "123456";
        homePageObject.navigateToHomePage();
        homePageObject.clickOnSignInButton();
        signInPageObject.setEmail(userEmail);
        signInPageObject.setPassword(userPassword);
        signInPageObject.signIn();
        homePageObject.clickOnProfileButton();
        let profileEmail = profilePageObject.getProfileEmail();
        assert.equal(profileEmail, userEmail);
    });
    
});
