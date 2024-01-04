import { $ } from '@wdio/globals'
import Page from './page.js';
import { expect } from '@wdio/globals';
import items from '../test-data/items.json' assert { type: "json" };

class ProductsPage extends Page {
    get cartBadge () {
        return $('.shopping_cart_badge');
    };

    async getItemSelector (itemId) {
        return $(`.inventory_item_label:has(a[id="${itemId}"]) ~ div[class="pricebar"] .btn_primary`);
    };

    async addToCart (itemId) {
        const selector = $(await this.getItemSelector(itemId));
        await selector.click();
    };

    async checkCounter () {
        return this.cartBadge.getText();
    };

    async goToTheCart () {
        return this.cartBadge.click();
    };
}

export default new ProductsPage();
