"use strict";
var webdriver = require("selenium-webdriver");
require('chromedriver');

var caps = {
    name : 'Basic Test Example',
    build :  '1.0',
    version : '70',
    platform : 'Windows 10',
    screen_resolution : '1366x768',
    record_video : 'true',
    record_network : 'false',
    browserName : 'Chrome',
};


async function basicExample(){
    try{
        var driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();

        await driver.get('http://www.google.com');


        await driver.getTitle().then(function(title) {
            console.log("The title is: " + title)
        });

        driver.quit();
    }

    catch(err){
        handleFailure(err, driver)
    }

}

basicExample();

function handleFailure(err, driver) {
    console.error('Something went wrong!\n', err.stack, '\n');
    driver.quit();
}
