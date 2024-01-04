import { $ } from '@wdio/globals'
import Page from './page.js';
import { expect } from '@wdio/globals';
import items from '../test-data/items.json' assert { type: "json" };

class ProductsPage extends Page {
    
    get testFirst () {
        return $('.inventory_item_label:has(a[id="item_4_title_link"]) ~ div[class="pricebar"] .btn_primary');
    }
    
    get testSec () {
        return $('#inventory_container .inventory_item_label:has(#item_0_title_link) ~ .pricebar:has(.btn_primary)');
    }
    get testThird () {
        return $('#inventory_container .inventory_item_label:has(#item_1_title_link) ~ .pricebar:has(.btn_primary)');
    }

    get cartBadge () {
        return $('.shopping_cart_badge');
    }

    async addToCart () {
        await this.testFirst.click();
    };
    async checkThatRightItemIsAdded () {

    };

    async checkCounter () {
        return this.cartBadge.getText();
    };
    async goToTheCart () {
        return this.cartBadge.click();
    }

    async checkThatItemWereAdded (id, name) {
        // jasmine expect that element is presented by id
    }
}

export default new ProductsPage();
