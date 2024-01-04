import { browser } from '@wdio/globals';

export default class Page {

    async open (path) {
        return browser.url(`https://www.saucedemo.com/v1/${path}`);
    };
    
    async getRandomValueFromJSON (json) {
        const values = Object.values(json);
        return values[parseInt(Math.random() * values.length)];
    };
}
