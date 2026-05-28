module.exports = {
	env: {
		browser: true,
		es2024: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:prettier/recommended",
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: "detect",
		},
	},
	rules: {
		"react/react-in-jsx-scope": "off",
		"react/prop-types": "off",
		"react/no-unescaped-entities": "off",
		"react-hooks/set-state-in-effect": "warn",
		"jsx-a11y/click-events-have-key-events": "off",
		"jsx-a11y/no-static-element-interactions": "off",
		"jsx-a11y/no-autofocus": "off",
		"jsx-a11y/media-has-caption": "off",
		"no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
		"prettier/prettier": ["error", { endOfLine: "lf" }],
	},
	ignorePatterns: ["dist/", "build/", "node_modules/", "public/", ".git/", "package-lock.json"],
};
