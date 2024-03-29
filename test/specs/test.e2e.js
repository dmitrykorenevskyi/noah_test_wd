import { faker } from '@faker-js/faker';

import CartPage from '../pageobjects/cart.page.js';
import LoginPage from '../pageobjects/login.page.js';
import ProductsPage from '../pageobjects/products.page.js';
import CheckoutInfoPage from '../pageobjects/checkoutInfo.page.js';
import CheckoutOverviewPage from '../pageobjects/checkoutOverview.page.js';
import CheckoutCompletePage from '../pageobjects/checkoutComplete.page.js';

import itemsList from '../test-data/items.json' assert { type: "json" };
import credentials from '../test-data/credentials.json' assert { type: "json" };

describe('As a standart logged in user, ', () => {
    beforeEach(async () => { 
        await LoginPage.open();
        await LoginPage.login(credentials.validUsername, credentials.validPassword);
    });

    it('I am abble to purchase all items from the list', async () => {
        for (let i = 0; i < itemsList.length - 1; i++) {
            await ProductsPage.addToCart(itemsList[i].id);
        };
        await ProductsPage.goToTheCart();

        for (let i = 0; i < itemsList.length - 1; i++) {
            await CartPage.checkThatRightItemWereAdded(itemsList[i].id);
        }
        await CartPage.goToCheckout();

        await CheckoutInfoPage.purchase(faker.person.firstName(), faker.person.lastName(), faker.location.zipCode());

        for (let i = 0; i < itemsList.length - 1; i++) {
            await CheckoutOverviewPage.checkThatRightItemWereAdded(itemsList[i].id);
        };
        await CheckoutOverviewPage.finishPurchase();

        await CheckoutCompletePage.checkThatPurchaseWasSuccessful();
    });
});

