import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'iran-yekan': ['var(--font-iran-yekan)', 'IRANYekanX', 'Tahoma', 'Arial', 'sans-serif'],
        'sans': ['var(--font-iran-yekan)', 'IRANYekanX', 'Tahoma', 'Arial', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
                            'primary-red': {
                      50: '#fef2f2',
                      100: '#fee2e2',
                      200: '#fecaca',
                      300: '#fca5a5',
                      400: '#f87171',
                      500: '#dc2626',
                      600: '#b91c1c',
                      700: '#991b1b',
                      800: '#7f1d1d',
                      900: '#450a0a',
                    },
                            'tron-red': {
                      light: '#dc2626',
                      DEFAULT: '#991b1b',
                      dark: '#7f1d1d',
                      soft: '#fef2f2',
                      medium: '#fecaca',
                    }
      },
    },
  },
  plugins: [],
};

export default config; 