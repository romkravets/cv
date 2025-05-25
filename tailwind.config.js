// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // or "./src/**/*.{js,ts,jsx,tsx}" depending on your structure
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0d0d0d',         // main background
        contrast: '#1f1f1f',     // contrast section
        accent: '#00ffea',       // primary accent
        secondary: '#ff3c68',    // secondary accent
        heading: '#ffffff',      // white text
        muted: '#999999',        // muted gray text
      },
    },
  },
  plugins: [],
}
