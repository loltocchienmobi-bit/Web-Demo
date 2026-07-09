const { defineConfig } = require('vite');
const path = require('path');

module.exports = defineConfig({
  root: __dirname,
  publicDir: path.resolve(__dirname, '../public'),
  build: {
    outDir: path.resolve(__dirname, '../dist-demo'),
    emptyOutDir: true
  }
});
