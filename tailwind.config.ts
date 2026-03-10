import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Replace 'YourFont' with the actual font name
        mono: ['Oxygen Mono', 'sans-serif'],
        Satoshi: ['Satoshi-Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config