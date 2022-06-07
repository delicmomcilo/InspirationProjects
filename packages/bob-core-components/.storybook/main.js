
const path = require('path');

const pathToInlineSvg = path.resolve(__dirname, '../src/icon/icons');
const arrowPath = path.resolve(__dirname, '../src/arrowButton/');



module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async config => {

    const rules = config.module.rules;

    const fileLoaderRule = rules.find(rule => rule.test.test('.svg'));
    fileLoaderRule.exclude = [pathToInlineSvg, arrowPath];

    rules.push({
      test: /\.svg$/,
      include: [pathToInlineSvg, arrowPath],
      use: [{
        loader: '@svgr/webpack',
        options: {
            svgo: false,

          // icon: true,
          // expandProps: false
        },
      }],
    });
    
    return config;
  }
}