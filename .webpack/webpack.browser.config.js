const webpackMerge = require('webpack-merge');

module.exports = () => (config) => {
    const merge = webpackMerge && webpackMerge.merge ? webpackMerge.merge : webpackMerge.default;
    const isProd = config.mode == 'production';
    // const tailwindConfig = getTailwindConfig(isProd);
    // RegExp.prototype.toJSON = function () { return this.source; };
    // console.log(JSON.stringify(config));
    const result = merge(config, {
        // module: {
        //     rules: [
        //         {
        //             test: /\.scss$/,
        //             loader: 'postcss-loader',
        //             options: {
        //                 postcssOptions: {
        //                     ident: 'postcss',
        //                     syntax: 'postcss-scss',
        //                     plugins: [
        //                         require('postcss-import'),
        //                         require('tailwindcss')(tailwindConfig),
        //                         require('autoprefixer'),
        //                     ],
        //                 },
        //             },
        //         },
        //     ],
        // },
    });

    // console.log('refe', JSON.stringify(result));

    return result;
};
