module.exports = {
  parser: 'babel-eslint',
  extends: [
    'react-app',
    // 'airbnb',
    // 'plugin:flowtype/recommended',
    // "plugin:css-modules/recommended",
    'prettier',
    // 'prettier/flowtype',
    'prettier/react',
  ],
  plugins: [
    // 'flowtype',
    //"css-modules",
    'babel',
    'react',
    'prettier',
  ],
  globals: {
    __DEV__: true,
  },
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  // parserOptions: {
  //   ecmaVersion: 6,
  //   sourceType: 'module',
  //   ecmaFeatures: {
  //     jsx: true,
  //   },
  // },
  rules: {
    // 'arrow-parens': ['error', 'as-needed'],
    // 'arrow-body-style': [2, 'as-needed'],
    // 'class-methods-use-this': 0,
    // 'comma-dangle': [2, 'always-multiline'],
    // 'no-restricted-syntax': [
    //   'error',
    //   'ForInStatement',
    //   'LabeledStatement',
    //   'WithStatement',
    // ],
    // 'import/imports-first': 0,
    // 'import/newline-after-import': 0,
    // 'import/no-dynamic-require': 0,
    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': ['error', { packageDir: '.' }],
    // 'import/no-named-as-default': 0,
    // 'import/no-unresolved': 2,
    // 'import/no-webpack-loader-syntax': 0,
    // 'import/prefer-default-export': 0,
    // Ensure <a> tags are valid
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    // 'max-len': 0,
    // 'newline-per-chained-call': 0,
    // 'no-confusing-arrow': 0,
    // Recommend not to leave any console.log in your code
    // Use console.error, console.warn and console.info instead
    // https://eslint.org/docs/rules/no-console
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],

    // 'no-use-before-define': 0,
    // Prefer destructuring from arrays and objects
    // http://eslint.org/docs/rules/prefer-destructuring
    'prefer-destructuring': [
      'warn',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    // Functional and class components are equivalent from React’s point of view
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prefer-stateless-function': 'off',

    // 'prefer-template': 2,
    'prettier/prettier': 'error',
    // 'react/forbid-prop-types': 0,
    // 'react/jsx-first-prop-new-line': [2, 'multiline'],
    // Allow .js files to use JSX syntax
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    // 'react/jsx-no-target-blank': 0,
    // 'react/require-default-props': 0,
    // 'react/require-extension': 0,
    // 'react/self-closing-comp': 0,
    // 'require-yield': 0,
  },
  settings: {
    // Allow absolute paths in imports, e.g. import Button from 'components/Button'
    // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
