module.exports = {
    'Google search test': function (browser) {
        let google = browser.page.google();

        google.navigate()
            .assert.title('Google')
            .assert.visible('@googleLogo')
            .assert.visible('@searchBar')
            .setValue('@searchBar', 'nightwatch')
            .assert.visible('@feelLucky')
            .assert.visible('@submit')
            .click('@submit');
    }
}