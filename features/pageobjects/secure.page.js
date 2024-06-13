import { $, browser } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */

    
    get flashAlert () {
        return $('#flash');
    }
    get navNotif (){
        return $(`//ul[5]//i[@class='ic-user']`)
    } 
    async verifMyDashboard(){
        (await this.navNotif).waitForDisplayed()
        await browser.pause(5000)
    }
}

export default new SecurePage();
