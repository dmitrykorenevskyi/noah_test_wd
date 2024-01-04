import { $ } from '@wdio/globals'
import Page from './page.js';
import { expect } from '@wdio/globals';

class CheckoutOverview extends Page {

    // get inputFirstName () {
    //     return $('#first-name');
    // }
    // get inputLastName () {
    //     return $('#last-name');
    // }
    // get inputZipCode () {
    //     return $('#postal-code');
    // }
    get btnFinish () {
        return $('a[href="./checkout-complete.html"]');
    }

    async finishPurchase () {
        return this.btnFinish.click();
    };

    async checkThatRightItemWereAdded (id) {
        const item = await $('#item_4_title_link');
        await expect(item).toBeDisplayed();
    }
}

export default new CheckoutOverview();
