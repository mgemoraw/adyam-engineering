// File: adyam/tailwind.config.js
module.exports = {
  content: [
    './templates/**/*.html',        // for base.html, home.html, etc.
    './**/templates/**/*.html',     // for app-level templates
    './static/**/*.js',             // optional, for JS using Tailwind classes
  ],
  input: "./assets/css/input.css",  // path to input file
  output: "./static/css/tailwind.css", // path to output file
  theme: {
    extend: {
      colors: {
        primary: '#721616',
        secondary: '#1a365d',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: {
    
  }
}
