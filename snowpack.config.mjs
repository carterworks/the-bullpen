export default {
  "mount": {
    "public": "/",
    "src": "/_dist_"
  },
  "devOptions": {
    "tailwindConfig": "./tailwind.config.js",
    "port": 8080
  },
  "plugins": [
    "@snowpack/plugin-postcss"
  ],
}