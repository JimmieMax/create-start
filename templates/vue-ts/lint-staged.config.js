module.exports = {
  'src/**/*.{js,ts,vue}': ['eslint --fix'],
  'src/**/*.{css,scss,vue}': ['stylelint --fix'],
  "src/**/*.{js,ts,json,vue,css,scss}": [
    "prettier --write",
    "git add"
  ]
};
