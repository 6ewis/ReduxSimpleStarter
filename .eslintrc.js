module.exports = {
 "parser": "babel-eslint",
 "extends": "airbnb",
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react/prefer-stateless-function": [0, { "ignorePureComponents": 1 }],
      "react/prop-types": [0, { ignore: [], customValidators: [] }],
      "jsx-a11y/no-static-element-interactions": [0],
      "jsx-a11y/label-has-for": [0],
      "jsx-a11y/click-events-have-key-events": [0],
      "react/jsx-no-bind": [0],
    },
    "env": {
      "browser": true,
      "node": true,
    }
};