module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    webpackFinal: (config) => {
        const cssRule = config.module.rules.find((elem) => elem.test.test('*.css'));
        const cssLoaderOptions = cssRule.use.find((elem) => {
            if (!elem.loader) return false;
            return elem.loader.includes('css-loader');
        });
        cssLoaderOptions.options.modules = true;

        config.module.rules.push({
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                    },
                },
                // Compiles Sass to CSS
                'sass-loader',
            ],
        });
        return config;
    },
};
