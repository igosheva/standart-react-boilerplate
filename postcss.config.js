const postcssNested = require('postcss-nested');
const postcssHexrgba = require('postcss-hexrgba');
const postcssPresetEnv = require('postcss-preset-env');
const postcssReporter = require('postcss-reporter');
const postcssBrowserReporter = require('postcss-browser-reporter');
const cssnano = require('cssnano');

module.exports = ({ env }) => {
  const isDevelopment = env !== 'production';
  const config = {
    ident: 'postcss',
    plugins: [
      postcssNested(),
      postcssPresetEnv({
        stage: 3,
        features: {
          'custom-properties': {
            preserve: false,
            warnings: isDevelopment,
          },
        },
        browsers: 'last 2 versions',
        importFrom: '@space307-ui/core/colors_olymp.css',
      }),
      postcssHexrgba,
    ],
  };

  if (isDevelopment) {
    config.sourceMap = true;
    config.plugins.push(postcssBrowserReporter(), postcssReporter());
  } else {
    config.plugins.push(
      cssnano({
        autoprefixer: false,
      }),
    );
  }

  return config;
};
