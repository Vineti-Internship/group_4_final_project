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
    const userEmail = "mane@mail.com";
    const userPassword = "123456";
    it('Open sign in page, confirm opened։ ', () => {
        homePageObject.navigateToHomePage();
        homePageObject.clickOnSignInButton();
        const headerText = signInPageObject.getHeaderText();
        console.log(headerText);
        assert.equal('Sign in', headerText);
    });

    it('Sign in as a user, confirm validity։ ', () => {
        signInPageObject.setEmail(userEmail);
        signInPageObject.setPassword(userPassword);
        signInPageObject.signIn();
        homePageObject.clickOnProfileButton();
        const profileEmail = profilePageObject.getProfileEmail();
        console.log(profileEmail);
        assert.equal(profileEmail, userEmail);
    });
});
