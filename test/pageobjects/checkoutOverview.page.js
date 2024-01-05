import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals';

class CheckoutOverview {

    get btnFinish () {
        return $('a[href="./checkout-complete.html"]');
    }

    async finishPurchase () {
        return this.btnFinish.click();
    };
    async checkThatRightItemWereAdded (itemId) {
        const item = await $(`#${itemId}`);
        await expect(item).toBeDisplayed();
    }

}

export default new CheckoutOverview();
