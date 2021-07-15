export default {
  mount: {
    public: '/',
    src: '/dist',
  },
  devOptions: {
    tailwindConfig: './tailwind.config.js',
    port: 8080,
    open: 'none',
  },
  plugins: ['@snowpack/plugin-postcss'],
};
