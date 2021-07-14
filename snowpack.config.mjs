export default {
  "mount": {
    "public": "/",
    "src": "/_dist_"
  },
  "devOptions": {
    "tailwindConfig": "./tailwind.config.js",
    "port": 8080,
    "open": "none"
  },
  "plugins": [
    "@snowpack/plugin-postcss"
  ],
}