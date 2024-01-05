import { $ } from '@wdio/globals'

class ProductsPage {

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
    async goToTheCart () {
        return this.cartBadge.click();
    };

    async checkCounter () {
        return this.cartBadge.getText();
    };

}

export default new ProductsPage();
