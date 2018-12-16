const assert = require('assert');
const HomePageObject = require('../../pages/HomePageObject').default;
const HomeConfig = require('../../configs/HomeConfig.json');
const SearchPageObject = require('../../pages/SearchPageObject').default;
const SearchConfig = require('../../configs/SearchConfig.json');

describe('Search', () => {
    let homePageObject = new HomePageObject(HomeConfig);
    let searchPageObject = new SearchPageObject(SearchConfig);
    it('Search some valid flight', () => {
        homePageObject.navigateToHomePage();
        homePageObject.setFrom('Yerevan');
        homePageObject.setTo('Paris');
        homePageObject.clickOnSearchButton();
    });
});