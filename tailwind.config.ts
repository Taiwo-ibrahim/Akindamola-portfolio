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
        from: { opacity: "0", transform: "translateY(12px)" },
        to:   { opacity: "1", transform: "translateY(0)" },
      },
    },
      animation: {
        "fade-in": "fadeIn 0.5s ease forwards",
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