'use strict';
const path = require('path');
const protractor = require('protractor');

describe('E2E #file-uploader test :', function () {
    let filePath = './../resources/test.dat';
    let absolutePath = path.resolve(__dirname, filePath);
   	
    it('Should upload file and redirect to /log', function () {
        browser.get('http://localhost:3000');

        element(by.model('myFile')).sendKeys(absolutePath);
		element(by.id('uploadFile')).click();

        expect(browser.getCurrentUrl()).toBe('/log');
	});

});