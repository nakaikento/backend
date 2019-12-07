module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules":{
	"eqeqeq": "error",
	"no-trailing-spaces": "error",
	"object-curly-spacing": [
		"error", "always"
	],
	"arrow-spacing": [
		"error": { "before": true, "after": true }
	],
	"no-console": 0
    },
};
