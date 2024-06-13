import { $, browser } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends Page {
    /**
     * define selectors using getter methods
     */
    get logo () {return $(`//*[@class="logo-menu"]`)}
    get menu () {return $(`//*[@class="btn-menu"]`)}
    get headerFeatures () {return $(`//header//span[text()="Features"]`)}
    get subFeaturesHighlights () {return $(`//*[@text()='Gaming Stream Highlights']`)}
    get subFeaturesPublisher () {return $(`//*[@text()='Content Publisher']`)}
    get subFeaturesStudio () {return $(`//*[@text()='Eklipse Studio']`)}
    get btnSignIn () {return $(`//*[@class="btn btn-login"]`)}
    get btnSignUp () {return $(`//*[@class="btn btn-register"]`)}
    get btnPremium () {return $(`//span[.='Premium']`)}
    get usecase () {return $(`//span[.='Use Case']`)}
    get discovery () {return $(`//span[.='Discovery']`)}
    get premium () {return $(`//a[.='Premium']`)}



    get capKeySectionhighlight () {return $(`//h3[.='Gaming Stream Highlights']`)}
    get capKeySectionhighlightImg () {return $(`#img-gaming > div > img`)}

    get capKeySectionEdit () {return $(`//h3[.='AI Edit']`)}
    get capKeySectionEditImg () {return $(`#img-edit > div > img`)}

    get capKeySectionMobile () {return $(`//h3[.='Mobile App']`)}
    get capKeySectionnMobileImg () {return $(`#img-mobile > div > img`)}

    async testimonial (no) {return $(`.div:nth-of-type(${no}) .elementor-testimonial__image]`)}




    get faqOpen () {return $(`//*[@id="elementor-tab-content-1151" and @style="display: block;"]`)}
    get faqClosed () {return $(`//*[@id="elementor-tab-content-1151" and @style="display: none;"]`)}

    get faq1 () {return $(`//h2[contains(.,'What is Eklipse?')]`)}
    get faq2 () {return $(`//h2[contains(.,'What can I do with Eklipse?')]`)}

    
    async elementHeaderbyText (txt) {return $(`//header//*[text()="${txt}"]`)}
    async elementMainbyText (txt) {return $(`//main//*[text()="${txt}"]`)}
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }
    get landingVideo() {return $(`//span[.='#1 AI GAMING STREAM HIGHLIGHTS']`)}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async hoverOnButton(button) {

        // Menggunakan JavaScript untuk memicu event hover
        await browser.execute((el) => {
            const event = new MouseEvent('mouseover', {
                view: window,
                bubbles: true,
                cancelable: true
            });
            el.dispatchEvent(event);
        }, button);
    }

    async hoverTextAndResult(element,text1){
        const athome = await this.landingVideo
        await athome.waitForDisplayed();
        const menuToDisplay = await this.elementHeaderbyText(element)
        await menuToDisplay.moveTo()
        const textToDisplay = await this.elementHeaderbyText(text1)
        await textToDisplay.waitForDisplayed();
        expect(textToDisplay).toBeDisplayed();

    }

    async captureKeyHover(){
        await (await this.capKeySectionhighlight).scrollIntoView({ block: 'center', inline: 'center' })
        await (await this.capKeySectionhighlight).waitForDisplayed()
        await (await this.capKeySectionhighlight).moveTo()
        await (await this.capKeySectionhighlight).waitForDisplayed()
        expect((await this.capKeySectionhighlightImg)).toBeDisplayed();
        
        
        await (await this.capKeySectionEdit).scrollIntoView({ block: 'center', inline: 'center' })
        await (await this.capKeySectionEdit).moveTo()
        await (await this.capKeySectionEditImg).waitForDisplayed();
        await browser.pause(1100)
        expect((await this.capKeySectionEditImg)).toBeDisplayed();
        
        await (await this.capKeySectionMobile).scrollIntoView({ block: 'end', inline: 'center' })
        await (await this.capKeySectionMobile).moveTo()
        await browser.pause(1000)
        await (await this.capKeySectionnMobileImg).waitForDisplayed()
        expect((await this.capKeySectionnMobileImg)).toBeDisplayed();
        await browser.pause(1000)
    }

    async testimoni(){        
        await (await this.testimonial(4)).scrollIntoView({ block: 'center', inline: 'center' })
        await (await this.testimonial(4)).waitForDisplayed()
        await browser.pause(500)
    
        await (await this.testimonial(10)).scrollIntoView({ block: 'center', inline: 'center' })
        await (await this.testimonial(10)).waitForDisplayed()
        await browser.pause(500)
    
    }
    async openFAQ(){
        await (await this.faq1).scrollIntoView({ block: 'center', inline: 'center' })
        await (await this.faq1).waitForClickable()
        await browser.pause(2000)         
        expect((await this.faqClosed)).toBeExisting();
        await (await this.faq1).click()
        await browser.pause(2000)
        expect((await this.faqOpen)).toBeDisplayed();
        // await (await this.faqOpen).click()
        // expect((await this.faqClosed)).toBeExisting();
        
    }
    
    /**
     * overwrite specific options to adapt it to page object
     C*/
    open () {
        return super.open('');
    }
}

export default new LandingPage();
