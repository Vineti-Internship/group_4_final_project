const assert = require('assert');
const HomePageObject = require('../../pages/HomePageObject').default;
const HomeConfig = require('../../configs/HomeConfig.json');
const SignupPageObject = require('../../pages/SignupPageObject').default;
const SignupConfig = require('../../configs/SignupConfig.json');
const ProfilePageObject = require('../../pages/ProfilePageObject').default;
const ProfileConfig = require('../../configs/ProfileConfig.json');
const SignInPageObject = require('../../pages/SignInPageObject').default;
const SignInConfig = require('../../configs/SignInConfig.json');

describe('Sign up', () => {
  let str1 = '123456';
  let str2 = '123456';
  let userName = "Mane Poghosian";
  let userEmail = "testmail@gmail.com";
  let homePageObject = new HomePageObject(HomeConfig);
  let signupPageObject = new SignupPageObject(SignupConfig);
  let signInPageObject = new SignInPageObject(SignInConfig);
  let profilePageObject = new ProfilePageObject(ProfileConfig);

  it('Navigate to Sign up page', () => {
    homePageObject.navigateToHomePage();
    homePageObject.clickOnSignupButton();
    let headerText = signupPageObject.getHeaderText();
    console.log(headerText);
    signupPageObject.waitUntilH1Exists();
    assert.equal(headerText, "Registration");
  });

  it('Sign up functionality', () => {
    signupPageObject.setName(userName);
    signupPageObject.setEmail(userEmail);
    signupPageObject.setPassword(str1);
    signupPageObject.setPassConf(str2);
    signupPageObject.clickRegisterButton();
    driver.switchTo().alert().accept();
    homePageObject.navigateToHomePage();
    homePageObject.clickOnSignInButton();
    signInPageObject.setEmail(userEmail);
    signInPageObject.setPassword(str1);
    signInPageObject.signIn();
    homePageObject.clickOnProfileButton();
    const profileEmail = profilePageObject.getProfileEmail();
    console.log(profileEmail);
    assert.equal(profileEmail, userEmail);
  });

  it('Sign up with existing email', () => {
    userName = "Mane Poghosian";
    userEmail = "mane@mail.com";
    homePageObject.clickOnSignOutButton();
    homePageObject.navigateToHomePage();
    homePageObject.clickOnSignupButton();
    signupPageObject.setName(userName);
    signupPageObject.setEmail(userEmail);
    signupPageObject.setPassword(str1);
    signupPageObject.setPassConf(str2);
    signupPageObject.clickRegisterButton();
    let emailTakenText = signupPageObject.getEmailTakenText();
    console.log(emailTakenText);
    signupPageObject.waitUntilEmailTakenExists();
    assert.equal(emailTakenText, "Email has already been taken");
  });

  it('Sign up with a password under 6 characters', () => {
    str1 = '12345';
    str2 = '12345';
    userEmail = "tester1@gmail.com";
    homePageObject.navigateToHomePage();
    homePageObject.clickOnSignupButton();
    signupPageObject.setName(userName);
    signupPageObject.setEmail(userEmail);
    signupPageObject.setPassword(str1);
    signupPageObject.setPassConf(str2);
    signupPageObject.clickRegisterButton(); 
    const passShortText = signupPageObject.getPassShortText();
    console.log(passShortText);
    signupPageObject.waitUntilPassShortExists();
    assert.equal(passShortText, "Password is too short (minimum is 6 characters)");
  });

  it('Sign up with not matching passowords', () => {
    let str1 = '1234560';
    let str2 = '123456';
    let userEmail = "tester2@gmail.com";
    signupPageObject.setName(userName);
    signupPageObject.setEmail(userEmail);
    signupPageObject.setPassword(str1);
    signupPageObject.setPassConf(str2);
    signupPageObject.clickRegisterButton();
    const passDidntMatchText = signupPageObject.getPassDidntMatchText();
    console.log(passDidntMatchText);
    signupPageObject.waitUntilDidntMatchExists();
    assert.equal(passDidntMatchText, 'Passwords did not match');
  });

  // it('Click Cancel works', () => {
  //   signupPageObject.clickCancelButton();
  // });

});
