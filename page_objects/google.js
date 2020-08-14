module.exports = {
    url: 'http://www.google.co.nz',
    elements: {
        searchBar: {
            selector: 'input[type=text]'
        },
        googleLogo: {
            selector: 'img[id=hplogo]'
        },
        feelLucky: {
            selector: '//*[@id="tsf"]/div[2]/div[1]/div[3]/center/input[2]',
            locateStrategy: 'xpath'
        },
        submit: {
            selector: 'input[name=btnK]'
        }
    }
}