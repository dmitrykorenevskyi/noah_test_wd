import { faker } from '@faker-js/faker';

import CommonHelpers from '../helpers/common.js';
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

    it('I am abble to purchase random item from the list', async () => {
        const randomItem = await CommonHelpers.returnRandomValueFromArray(itemsList);

        await ProductsPage.addToCart(randomItem.id);
        await ProductsPage.goToTheCart();

        await CartPage.checkThatRightItemWereAdded(randomItem.id);
        await CartPage.goToCheckout();

        await CheckoutInfoPage.purchase(faker.person.firstName(), faker.person.lastName(), faker.location.zipCode());

        await CheckoutOverviewPage.checkThatRightItemWereAdded(randomItem.id);
        await CheckoutOverviewPage.finishPurchase();

        await CheckoutCompletePage.checkThatPurchaseWasSuccessful();
    });
});

