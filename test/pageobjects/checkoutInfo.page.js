import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals';

class CheckoutInfo {

    get inputFirstName () {
        return $('#first-name');
    }
    get inputLastName () {
        return $('#last-name');
    }
    get inputZipCode () {
        return $('#postal-code');
    }
    get btnContinue () {
        return $('input[value="CONTINUE"]');
    }

    async purchase (firstName, lastName, zipCode) {
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputZipCode.setValue(zipCode);

        await this.btnContinue.click();
    };
    async checkThatRightItemWereAdded (id) {
        const item = await $('#item_4_title_link');
        await expect(item).toBeDisplayed();
    };
    
}

export default new CheckoutInfo();
