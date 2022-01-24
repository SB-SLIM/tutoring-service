// const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "storybook-readme/register",
    "@storybook/addon-a11y/register",
    "@storybook/addon-actions/register",
    "@storybook/addon-backgrounds/register",
    "@storybook/addon-docs/register",
    "@storybook/addon-docs/preset",
    "@storybook/addon-events/register",
    "@storybook/addon-jest/register",
    "@storybook/addon-knobs/register",
    "@storybook/addon-links/register",
    "@storybook/addon-viewport/register",
    "@storybook/preset-scss",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },

  // webpackFinal: async (config) => {
  //   // add SCSS support for CSS Modules
  //   config.module.rules.push({
  //     test: /\.scss$/,
  //     use: [
  //       "style-loader",
  //       "css-loader?modules&importLoaders",
  //       "sass-loader",
  //       "sass",
  //     ],
  //     include: path.resolve(__dirname, "../"),
  //   });

  //   return config;
  // },
};
