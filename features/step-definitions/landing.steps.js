import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import { Before }from '@cucumber/cucumber';
import LandingPage from '../pageobjects/landing.page.js';
import SecurePage from '../pageobjects/secure.page.js';

const pages = {
    LandingPage: LandingPage
}
// Before(async function (){
//     await browser.reloadSession()
// })
Given(/^I am on Home$/, async () => {
    await LandingPage.open()
    
});

When(/^I Hover menu (.+) and show (.+)$/, async (text, tobedisplayed1) => {
    await LandingPage.hoverTextAndResult(text,tobedisplayed1)
});
When(/^I Hover menu at capture key section should display specific images$/, async () => {
    await LandingPage.captureKeyHover()
});
When(/^I can see testimoni slides$/, async () => {
    await LandingPage.testimoni()
});
When(/^I click on FAQ I can see FAQ answer$/, async () => {
    await LandingPage.openFAQ()
});


Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

