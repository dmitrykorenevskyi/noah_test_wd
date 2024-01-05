import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals';

class CartPage {

    get btnCheckout () {
        return $('.checkout_button');
    };
    get btnContinueShopping () {
        return $('.shopping_cart_badge');
    };

    async checkThatRightItemWereAdded (itemId) {
        const item = await $(`#${itemId}`);
        await expect(item).toBeDisplayed();
    };
    async goToCheckout () {
        return this.btnCheckout.click();
    };
    
}

export default new CartPage();
