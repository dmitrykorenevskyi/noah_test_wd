import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals';

class CheckoutComplete {

    get header () {
        return $('.complete-header');
    }
    get body () {
        return $('.complete-text');
    }

    async checkThatPurchaseWasSuccessful () {
        const image = await $('img[src="img/pony-express.png"]');
        const headerTxt = await this.header.getText();
        const bodyTxt = await this.body.getText();

        await expect(image).toBeDisplayed();
        await expect(headerTxt).toEqual('THANK YOU FOR YOUR ORDER');
        await expect(bodyTxt).toEqual('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    }
}

export default new CheckoutComplete();
