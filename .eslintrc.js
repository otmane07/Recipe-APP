module.exports = {
    env: {
        browser: true, // Browser global variables like `window` etc.
        commonjs: true, // CommonJS global variables and CommonJS scoping.Allows require, exports and module.
        es6: true, // Enable all ECMAScript 6 features except for modules.
        jest: true, // Jest global variables like `it` etc.
        node: true // Defines things like process.env when generating through node
    },
    // Add sharebel conf
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jest/recommended",
        "plugin:testing-library/react"
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
        requireConfigFile: false,
    },
    // This plugin ["import"] intends to support the linting of ES2015+ (ES6+) import/export syntax, and prevent
    // issues with the misspelling of file paths and import names.
    plugins: [
        "import" // eslint-plugin-import plugin. https://www.npmjs.com/package/eslint-plugin-import
    ],
    root: true, // For configuration cascading.
    rules: {
        "react/prop-types": "off",
    },
    settings: {
        react: {
            version: "detect" // Detect react version
        }
    },
};
