import { $ } from '@wdio/globals';

class LoginPage {
    get inputUsername () {
        return $('#user-name');
    };
    get inputPassword () {
        return $('#password');
    };
    get btnSubmit () {
        return $('#login-button');
    };

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    };
    async open () {
        return browser.url(`https://www.saucedemo.com/v1/index.html`);
    };
}

export default new LoginPage();
