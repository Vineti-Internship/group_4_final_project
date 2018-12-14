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
    let str1 = '123456';
    let str2 = '123456';
    let userName = "Mane Poghosian";
    let userEmail = "tester22@gmail.com";
    console.log(headerText);
    signupPageObject.waitUntilH1Exists();
    assert.equal(headerText, "Registration");
    signupPageObject.setName(userName);
    signupPageObject.setEmail(userEmail);
    signupPageObject.setPassword(str1);
    signupPageObject.setPassConf(str2);
    signupPageObject.clickRegisterButton();
  });
  it('Sign up with existing email', () => {
    let str1 = '123456';
    let str2 = '123456';
    let userName = "Mane Poghosian";
    let userEmail = "tester22@gmail.com";
    homePageObject.navigateToHomePage();
    homePageObject.clickOnSignupButton();
    signupPageObject.setName(userName);
    signupPageObject.setEmail(userEmail);
    signupPageObject.setPassword(str1);
    signupPageObject.setPassConf(str2);
    signupPageObject.clickRegisterButton();
    let emailTakenText = signupPageObject.getEmailTakenText();
    console.log(emailTakenText);
    assert.equal(emailTakenText, "Email has already been taken");
  });

  it('Sign up with a password under 6 characters', () => {
    let str1 = '12345';
    let str2 = '12345';
    let userName = "Mane Poghosian";
    let userEmail = "tester222@gmail.com";
    signupPageObject.setName(userName);
    signupPageObject.setEmail(userEmail);
    signupPageObject.setPassword(str1);
    signupPageObject.setPassConf(str2);
    signupPageObject.clickRegisterButton(); 
    let passShortText = signupPageObject.getPassShortText();
    console.log(passShortText);
    assert.equal(passShortText, "Password is too short (minimum is 6 characters)");
  });

  it('Sign uo with not matching passowords', () => {
    let str1 = '1234560';
    let str2 = '123456';
    let userName = 'Mane';
    let userEmail = "tester123@gmail.com";
    signupPageObject.setName(userName);
    signupPageObject.setEmail(userEmail);
    signupPageObject.setPassword(str1);
    signupPageObject.setPassConf(str2);
    signupPageObject.clickRegisterButton();
    let passDidntMatchText = signupPageObject.getPassDidntMatchText();
    console.log(passDidntMatchText);
    assert.equal(passDidntMatchText, 'Passwords did not match');
  });

  
});
