import { theme } from './src/lib/theme.ts'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx,js,jsx,cjs}'],
  theme: {
    extend: {
      colors: theme.colors,
      borderRadius: theme.borderRadius,
      fontSize: theme.fontSize,
      fontWeight: theme.fontWeights,
    },
  },

  plugins: [],
}
