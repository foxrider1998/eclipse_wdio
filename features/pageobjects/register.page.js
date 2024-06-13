import { $, browser } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {
    /**
     * define selectors using getter methods
     */
    get name () {return $(`#name`)}
    get email () {return $(`#email`)}
    get password () {return $(`#password`)}
    get PasswordConfirm () {return $(`#password_confirmation`)}
    get signUp () {return $(`.btn-primary`)}
    get login () {return $(`//a[contains(.,'Login')]`)}
    get image1 () {return $(`//div[@class='slick-slide slick-active slick-current']//img[@src='/images/auth/slide-3.png']`)}
    get image2 () {return $(`//div[@class='slick-slide slick-active slick-current']//img[@src='/images/auth/slide-1.png']`)}
    get image3 () {return $(`//div[@class='slick-slide slick-active slick-current']//img[@src='/images/auth/slide-2.png']`)}

    get invalidInput (){return $(`//*[@class="invalid-feedback" or @class="invalid-feedback d-block"]`)    }
    get usedEmail (){return $(`.alert`)    }
    get loginAfterRegist () {return $(`//span[.='Create AI Highlights from my game streams']`)}
   
    async getRandomAlphabeticString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }
        return result;
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to Register using username and password
     */
    async Register (nameuser, password, email,sign = true) {
        await this.name.waitForDisplayed()
        await this.name.setValue(nameuser);
        await this.email.setValue(email);
        await this.password.setValue(password);
        await this.PasswordConfirm.setValue(password);
        if (sign) {
            await (await this.signUp).click();           
        }
    }
    
    async RegisterfalseConfirm (nameuser, password, email) {
        await this.name.waitForDisplayed()
        await this.name.setValue(nameuser);
        await this.email.setValue(email);
        await this.password.setValue(password);
        await this.PasswordConfirm.setValue("inibukan password");
        await (await this.signUp).click();     
    }

    async verifySuccessRegister(){
        await (await this.loginAfterRegist).waitForDisplayed()
        await browser.pause(5000)
        expect((await this.loginAfterRegist)).toBeDisplayed(); 
    }

    async invalidFormatDisplay(){
        await ((await this.invalidInput)).waitForDisplayed(); 
        await browser.pause(5000)
        expect((await this.invalidInput)).toBeDisplayed(); 
    }
    
    async normalFlow(){
        const rand =await this.getRandomAlphabeticString(3)
        await this.Register("arisaja","Aresqwer@1234",`ares${rand}@gmail.com`)
    }
    async wrongEmail(){
        await this.Register("arisaja","Aresqwer@1234","aresajagmail.com",false)
    }

    async wrongPassword(){
        await this.Register("arisaja","1234","aresa@jagmail.com",false)
    }
    async usedEmail(){
        await this.Register("arisaja","qwer1234","aresa@jagmail.com",false)
    }
    async wrongPasswordconfirm(){
        await this.RegisterfalseConfirm("arisaja","aresqwer1234","aresa@jagmail.com")
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open(`register`,`app.`)
    }
}

export default new RegisterPage();
