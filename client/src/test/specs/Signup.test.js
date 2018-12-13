const assert = require('assert');
const HomePageObject = require('../../pages/HomePageObject').default;
const HomeConfig = require('../../configs/HomeConfig.json');
const SignupPageObject = require('../../pages/SignupPageObject').default;
const SignupConfig = require('../../configs/SignupConfig.json');

//for this whole test suite to work, it has to be run only once with a non-taken email
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
  it('Sign up with existing email', () => {
    homePageObject.navigateToHomePage();
    homePageObject.clickOnSignupButton();
    signupPageObject.fillInName();
    signupPageObject.fillInEmail();
    signupPageObject.fillInPassword();
    signupPageObject.fillInPassConf();
    signupPageObject.clickRegisterButton();
    let emailTakenText = signupPageObject.getEmailTakenText();
    console.log(emailTakenText);
    assert.equal(emailTakenText, "Email has already been taken");
  });

  it('Sign up with a password under 6 characters', () => {
    signupPageObject.fillInName();
    signupPageObject.fillInEmail();
    signupPageObject.setInvalidPass();
    signupPageObject.confInvalidPass();
    signupPageObject.clickRegisterButton(); 
    let passShortText = signupPageObject.getPassShortText();
    console.log(passShortText);
    assert.equal(passShortText, "Password is too short (minimum is 6 characters)");
  });

  
});
