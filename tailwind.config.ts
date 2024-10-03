import { Config } from 'tailwindcss';
export default {
	content: ["./index.html", "./main.js"],
	theme: {
		extend: {
      colors: {
        "very-dark-blue": "#070439",
        "desaturated-blue": "#585989",
        "bright-blue": "#3065f8",
        "moderate-cyan": "#3c9f8f",
        "light-grayish-blue": "#f6f6fe",
        "light-gray": "#bfbfbf",
      },
      backgroundColor : {
        "very-dark-blue": "#070439",
        "desaturated-blue": "#585989",
        "bright-blue": "#3065f8",
        "moderate-cyan": "#3c9f8f",
        "light-grayish-blue": "#f6f6fe",
        "light-gray": "#bfbfbf",
      }
    },
	},
	plugins: [],
} satisfies Config;

