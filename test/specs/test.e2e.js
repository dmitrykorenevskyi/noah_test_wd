import { expect } from '@wdio/globals';
import { faker } from '@faker-js/faker';

import LoginPage from '../pageobjects/login.page.js';
import CartPage from '../pageobjects/cart.page.js';
import CheckoutInfoPage from '../pageobjects/checkoutInfo.page.js';
import CheckoutOverviewPage from '../pageobjects/checkoutOverview.page.js';
import CheckoutCompletePage from '../pageobjects/checkoutComplete.page.js';
import ProductsPage from '../pageobjects/products.page.js';

import credentials from '../test-data/credentials.json' assert { type: "json" };

describe('As a standart logged in user, ', () => {
    beforeEach(async () => { 
        await LoginPage.open();
        await LoginPage.login(credentials.validUsername, credentials.validPassword);
    });

    it('I am abble to purchase all of the items from the list', async () => {
        await ProductsPage.addToCart();
        await ProductsPage.goToTheCart();

        await CartPage.checkThatRightItemWereAdded();
        await CartPage.goToCheckout();

        await CheckoutInfoPage.purchase('LOL', '123', '12313');
        await CheckoutOverviewPage.finishPurchase();

        await CheckoutCompletePage.checkThatPurchaseWasSuccessful();

        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!')
    })
});

