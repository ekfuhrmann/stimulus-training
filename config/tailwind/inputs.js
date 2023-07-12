const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addComponents }) => {
  // Base styles
  const inputs = {
    ".field-wrapper": {
      "@apply flex flex-col gap-8 w-full": {},
      // label
      "& label": {
        "@apply text-md text-primary-text": {},
      },
      // overrides
      "&:has(> [required]) label::after": {
        content: '"*"',
        "@apply text-blue-500 align-super leading-0": {},
      },
      // core field styles
      '& input[type="text"], & input[type="password"], & input[type="email"]': {
        // base styles
        "@apply min-h-48 h-0 rounded border-0 bg-white text-primary-text ring-1 ring-blue-100 transition-all truncate":
          {},
        // placeholder styles
        "@apply placeholder:text-gray-300": {},
        // hover styles
        "@apply hover:ring-blue-300": {},
        // focus styles
        "@apply focus:ring-2 focus:ring-blue-500": {},
        // disabled styles
        "@apply disabled:bg-gray-500/4 disabled:ring-gray-500/8 disabled:text-gray-300 disabled:placeholder:text-gray-200":
          {},
      },
    },
  };

  addComponents(inputs);
});
