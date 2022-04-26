module.exports = {
  extends: ["stylelint-config-standard"],
  ignoreFiles: ["dist/**/*.css", "src/assets/styles/font-icon/*.css"],
  rules: {
    "selector-type-no-unknown": [true, { ignoreTypes: ["page"] }],
  },
};
