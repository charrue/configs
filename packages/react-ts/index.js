/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "@charrue/eslint-config-typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-no-target-blank": "warn",
    "react/display-name": "warn",

    "prefer-arrow-callback": "off",

    "import/no-default-export": "off",

    "react/self-closing-comp": "warn",
    "react/jsx-curly-brace-presence": [
      "error",
      { props: "never", children: "never" },
    ],
  },
};
