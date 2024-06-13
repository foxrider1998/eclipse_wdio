import { $, browser } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get logo () {return $(`//*[@class="logo-menu"]`)}
    get menu () {return $(`//*[@class="btn-menu"]`)}
    get headerFeatures () {return $(`//header//span[text()="Features"]`)}
    get subFeaturesHighlights () {return $(`//*[@text()='Gaming Stream Highlights']`)}
    get subFeaturesPublisher () {return $(`//*[@text()='Content Publisher']`)}
    get subFeaturesStudio () {return $(`//*[@text()='Eklipse Studio']`)}
    get subFeaturesHighlights () {return $(`//*[@text()='Gaming Stream Highlights']`)}
    get subFeaturesHighlights () {return $(`//*[@text()='Gaming Stream Highlights']`)}
    get subFeaturesHighlights () {return $(`//*[@text()='Gaming Stream Highlights']`)}
    get subFeaturesHighlights () {return $(`//*[@text()='Gaming Stream Highlights']`)}
    get logo () {return $(`//*[@class="logo-menu"]`)}
    get logo () {return $(`//*[@class="logo-menu"]`)}
    get logo () {return $(`//*[@class="logo-menu"]`)}
    get logo () {return $(`//*[@class="logo-menu"]`)}
    get logo () {return $(`//*[@class="logo-menu"]`)}
    get logo () {return $(`//*[@class="logo-menu"]`)}
    get logo () {return $(`//*[@class="logo-menu"]`)}
    get usecase () {return $(`//span[.='Use Case']`)}
    get discovery () {return $(`//span[.='Discovery']`)}
    get premium () {return $(`//a[.='Premium']`)}
    
    get loginFailed() {return $(`#swal2-title`)}
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    async verifyFailedLogin(){
        await( await this.loginFailed).waitForDisplayed()
        await browser.pause(5000)
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await (await this.inputUsername).waitForDisplayed()
        await this.inputUsername.setValue(username);
        await browser.pause(5000)
        await this.inputPassword.setValue(password);
        console.log("catatan 1",username , password);
        await browser.pause(5000)
        await this.btnSubmit.click();
        await browser.pause(5000)
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login',"app.");
    }
}

export default new LoginPage();
