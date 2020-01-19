const axios = require('axios')
const cheerio = require('cheerio')

const url = 'https://www.channelfireball.com/all-strategy/articles/theros-beyond-death-limited-set-review-green/'

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        // const statsTable = $('.statsTableContainer > tr');
        const images = $('.crystal-catalog-helper.crystal-catalog-helper-grid > a > img')
        Object.values(images).forEach(elt => console.log(elt.attribs[`data-lazy-src`]))
    })
    .catch(console.error)