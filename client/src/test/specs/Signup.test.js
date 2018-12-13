const assert = require('assert');
const HomePageObject = require('../../pages/HomePageObject').default;
const HomeConfig = require('../../configs/HomeConfig.json');
const SignupPageObject = require('../../pages/SignupPageObject').default;
const SignupConfig = require('../../configs/SignupConfig.json');

describe('Sign up', () => {
  let homePageObject = new HomePageObject(HomeConfig);
  let signupPageObject = new SignupPageObject(SignupConfig);
  it('Sign up functionality', () => {
    homePageObject.navigateToHomePage();
    homePageObject.clickOnSignupButton();
    let headerText = signupPageObject.getHeaderText();
    console.log(headerText);
    signupPageObject.waitUntilH1Exists();
    assert.equal(headerText, "Registration");
    signupPageObject.fillInName();
    signupPageObject.fillInEmail();
    signupPageObject.fillInPassword();
    signupPageObject.fillInPassConf();
    signupPageObject.clickRegisterButton();
  });
});
