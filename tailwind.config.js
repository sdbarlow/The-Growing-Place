/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        custom: 'rgb(106,188,239)',
        pengblue: 'rgb(0,129,206)'
      },
      fontFamily: {
        'sniglet': ['Sniglet', 'sans-serif'],
        'concert': ['Concert One', 'sans-serif'],
      },
      keyframes: {
        dropdown: {
            '0%':{height:0},
            '20%':{height:20},
            '40%':{height:40},
            '60%':{height:60},
            '80%':{height:80},
            '100%':{ height: 100}
        },
        reveal: {
          '0%':{opacity:0},
          '50%':{opacity:0},
          '100%':{opacity:1},
        },
        rotate: {
          '170': '170deg',
        },
        dropback: {
            '0%':{height:100},
            '20%':{height:80},
            '40%':{height:60},
            '60%':{height:40},
            '80%':{height:20},
            '100%':{ height: 0}
        }
      },
      animation: {
        dropdown: 'dropdown 0.2s linear',
        dropback: 'dropback 0.5s ease-out',
        reveal: 'reveal 0.6s linear'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
