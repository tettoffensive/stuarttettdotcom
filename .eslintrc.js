module.exports = {
  extends: [
    'next',
    'next/core-web-vitals',
    'airbnb',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'react/require-default-props': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
