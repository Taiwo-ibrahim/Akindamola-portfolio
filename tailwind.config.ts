import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        mono: ['Oxygen Mono', 'sans-serif'],
        Satoshi: ['Satoshi-Black', 'sans-serif'],
      },

      // ⬇️ Added fade-in animation here
      keyframes: {
        fadeIn: {  
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-in-out forwards",
      },
    },
  },

  plugins: [],
}

export default config

// import type { Config } from 'tailwindcss'

// const config: Config = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         // Replace 'YourFont' with the actual font name
//         mono: ['Oxygen Mono', 'sans-serif'],
//         Satoshi: ['Satoshi-Black', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// }

// export default config