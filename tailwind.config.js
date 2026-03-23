/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.jsx",
    "./resources/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        navy:        '#0C1B2E',
        'navy-light':'#132640',
        'navy-deep': '#080F1A',
        'section-bg':'#0F2035',
        gold:        '#C9943A',
        'gold-light':'#E8B96A',
        'gold-pale': '#F5E6C8',
        cream:       '#F8F2E8',
        'text-light':'#D4C5A9',
        'text-muted':'#8A7D6A',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans:  ['"DM Sans"', 'sans-serif'],
      },
      keyframes: {
        fadeInDown: { from:{ opacity:'0', transform:'translateY(-20px)' }, to:{ opacity:'1', transform:'none' } },
        fadeInUp:   { from:{ opacity:'0', transform:'translateY(30px)'  }, to:{ opacity:'1', transform:'none' } },
        bounce2:    { '0%,100%':{ transform:'translateX(-50%) translateY(0)' }, '50%':{ transform:'translateX(-50%) translateY(8px)' } },
        waPulse:    { '0%,100%':{ boxShadow:'0 4px 20px rgba(37,211,102,0.4)' }, '50%':{ boxShadow:'0 4px 32px rgba(37,211,102,0.75)' } },
      },
      animation: {
        fadeInDown: 'fadeInDown 0.8s ease both',
        fadeInUp:   'fadeInUp 1s ease both',
        bounce2:    'bounce2 2s infinite',
        waPulse:    'waPulse 2.5s infinite',
      },
    },
  },
  plugins: [],
}
