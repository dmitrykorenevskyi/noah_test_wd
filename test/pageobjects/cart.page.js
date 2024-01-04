import { $ } from '@wdio/globals'
import Page from './page.js';
import { expect } from '@wdio/globals';

class CartPage extends Page {

    get btnCheckout () {
        return $('.checkout_button');
    }
    get btnContinueShopping () {
        return $('.shopping_cart_badge');
    }
    get btnRemove () {

    }
    get cartBadge () {

    }

    // async checkCounter () {
    //     return this.cartBadge.getText();
    // };
    async goToCheckout () {
        return this.btnCheckout.click();
    }

    async checkThatRightItemWereAdded (id) {
        const item = await $('#item_4_title_link');
        await expect(item).toBeDisplayed();
    }
}

export default new CartPage();
