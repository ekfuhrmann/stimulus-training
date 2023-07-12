const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addVariant }) => {
  addVariant("data-active", '&[data-state="active"]');
  addVariant("group-data-active", ':merge(.group)[data-state="active"] &');
  addVariant("data-valid", '&[data-state="valid"]');
  addVariant("group-data-valid", ':merge(.group)[data-state="valid"] &');
});
