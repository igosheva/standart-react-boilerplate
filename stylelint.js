const fonts = {
  'main-font': `'Roboto', sans-serif`,
};

function transformObjectKeysToCssVariableSyntax(data) {
  const acc = {};

  for (const key in data) {
    acc[`--${key}`] = data[key];
  }

  return acc;
}

const themes = {
  app: {
    fonts: transformObjectKeysToCssVariableSyntax(fonts),
  },
};

const createConfig = () => ({
  plugins: [require.resolve('stylelint-value-no-unknown-custom-properties')],
  extends: ['stylelint-config-standard', 'stylelint-config-prettier', 'stylelint-config-property-sort-order-smacss'],
  rules: {
    'max-empty-lines': 2,
    'no-descending-specificity': null,
    'property-no-unknown': null,
    'color-hex-length': null,
    'font-family-no-missing-generic-family-keyword': null,
    'declaration-property-unit-allowed-list': {
      'line-height': [],
      '/^animation/': ['ms'],
      '/^transition/': ['ms'],
    },
    'font-weight-notation': 'numeric',
    'no-eol-whitespace': true,
    'csstools/value-no-unknown-custom-properties': [
      true,
      {
        importFrom: [
          {
            customProperties: {
              ...themes.app.fonts,
            },
          },
        ],
      },
    ],
  },
});

module.exports = createConfig();
module.exports.createConfig = createConfig;
