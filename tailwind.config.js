module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
      extend: {
        fontFamily: {
            atlassian: ['"Atlassian Sans"', 'sans-serif'],
            special: ['"Special Gothic Condensed One"', 'sans-serif'], 
      },
      
      },
    },
    plugins: [
      require('flowbite/plugin')
    ],
  }