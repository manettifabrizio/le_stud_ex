const fractionWidths = require("tailwindcss-fraction-widths");

module.exports = {
	content: ["./src/**/*.{html, js}",
            'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
	theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]
}
