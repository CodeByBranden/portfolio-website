module.exports = function (eleventyConfig) {
    // Copy the contents of the `public` folder to the output folder
	// For example, `./public/css/` ends up in `_site/css/`
	eleventyConfig.addPassthroughCopy({
		"./public/": "/",
	});

    return {
        dir: {
            input: "src", // default: "."
            output: "_site" // default: "_site", but left here for clarity
        }
    }
}
