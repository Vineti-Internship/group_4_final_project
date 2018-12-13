const assert = require('assert');
const HomePageObject = require('../../pages/HomePageObject').default;
const HomeConfig = require('../../configs/HomeConfig.json');



describe('Sign up', () => {
  let homePageObject = new HomePageObject(HomeConfig);
  it('Sign up functionality', () => {
    homePageObject.navigateToHomePage();
    homePageObject.clickOnSignupButton();
  });
});
