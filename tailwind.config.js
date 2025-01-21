const { link } = require('fs');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './libs/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        body: '#F2F2F2',
        primary: '#005087',
        secondary: '#AB86D1',
        tertiary: '#53CDE6',
        success: {
          light: '#28C76F4D',
          dark: '#28C76F',
        },
        hover: '#79A1F6',
        link: '#0D64FB',
      },
      boxShadow: {
        card: '0px 1px 4px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
    },
  },
  plugins: [],
};
