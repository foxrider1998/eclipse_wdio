import { Given, When, Then } from '@wdio/cucumber-framework';
import { Before }from '@cucumber/cucumber';
import RegisterPage from '../pageobjects/register.page.js';
import SecurePage from '../pageobjects/secure.page.js';

const pages = {
    Register: RegisterPage
}
Before(async function (){
    await browser.reloadSession()
})

Given(/^I am at (\w+) page$/, async (page) => {
    await RegisterPage.open()
});

When(/^I register with correct format$/, async () => {
    await RegisterPage.normalFlow()
});
When(/^I register with wrong email format$/, async () => {
    await RegisterPage.wrongEmail()
});
When(/^I register with wrong password confirmation$/, async () => {
    await RegisterPage.wrongPasswordconfirm();
});

When(/^I register with wrong password format$/, async () => {
    await RegisterPage.wrongPassword()
});

When(/^I see warning mesage$/, async () => {
    await RegisterPage.invalidFormatDisplay();
});

When(/^I see a register succes$/, async () => {
    await RegisterPage.verifySuccessRegister()
});

