import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        '1px': '1px',
        '27px': '27px'
      },
      height: {
        '1px': '1px',
        '27px': '27px'
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'] 
      },
      backgroundColor: {
        'system-color': 'rgb(var(--background-color-rgb))',
      },
      rotate: {
        '-45': '-45deg',
        '45': '45deg',
      },
      margin: {
        '9px': '9px',
      },
    },
  },
  plugins: [],
}
export default config
