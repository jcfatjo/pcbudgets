const path = require("path");

const eslintCommand = filenames => `next lint --fix --file ${filenames.map(f => path.relative(process.cwd(), f)).join(" --file ")}`;
const formatCommand = "prettier --write";
const stylelintCommand = 'stylelint --allow-empty-input "**/*.{css,scss}"';
module.exports = {
    "*.{js,jsx,ts,tsx}": [formatCommand, eslintCommand],
    "*.{css,scss}": [formatCommand, stylelintCommand],
    "!*.{js,jsx,ts,tsx,css,scss}": [formatCommand]
};

module.exports = {
    "*.{js,jsx,ts,tsx}": [eslintCommand, formatCommand],
    "*.{css,scss}": [stylelintCommand, formatCommand],
    "!*.{js,jsx,ts,tsx,css,scss}": [formatCommand]
};