const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
    let metadata = await Image(src, {
        widths: [300, 600],
        formats: ['avif', 'jpeg'],
        outputDir: './dist/img/',
    });

    let imageAttributes = {
        alt,
        sizes,
        loading: 'lazy',
        decoding: 'async',
    };

    // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
    return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

    eleventyConfig.addFilter("getCurrency", (currencyObject) => {
        //console.log(currencyObject);
        let symbol;

        for (const [key, value] of Object.entries(currencyObject)) {
            console.log(`${key}: ${value.symbol}`);
            symbol = value.symbol;
          }
        return symbol;
    })
    eleventyConfig.addFilter("getLanguage", (languageObject) => {
        //console.log(currencyObject);
        let language;

        for (const [key, value] of Object.entries(languageObject)) {
            console.log(`${key}: ${value}`);
            language = value;
          }
        return language;
    })

    return {
        dir: {
            input: 'src',
            output: 'dist',
        },
    };
};
