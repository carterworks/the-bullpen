module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{html,vue,js,jsx,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          'JetBrainsMono',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      keyframes: {
        blink: {
          '0%, 100%': {
            opacity: 1,
          },
          '50%': {
            opacity: 0,
          },
        },
      },
    },
    animation: {
      blink: 'blink 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
  },
  variants: {},
  plugins: [],
};
