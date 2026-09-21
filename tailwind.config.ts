module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0a2240',
        gold: '#d4af37',
        blue: '#1d4f91',
        sky: '#dfeaf9',
        slate: '#f5f7fb',
        ink: '#16212d'
      },
      boxShadow: {
        soft: '0 18px 45px rgba(10, 34, 64, 0.08)'
      }
    }
  },
  plugins: []
};
