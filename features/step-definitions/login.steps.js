import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'

import { Before }from '@cucumber/cucumber';
import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

const pages = {
    login: LoginPage
}
Before(async function (){
    await browser.reloadSession()
})
Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (.+) and (\w+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should (.*)$/, async (message) => {
    if (message == "fail login") {
        await LoginPage.verifyFailedLogin();
    } else {
        await SecurePage.verifMyDashboard();
    }
});

