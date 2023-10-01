module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    // Regole ESLint personalizzate...
  },
  globals: {
    // Altre variabili globali...
    bootstrap: true,
  },
};
