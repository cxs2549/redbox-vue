module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "src/assets/css/app.scss";`,
            },
        },
    },
}
