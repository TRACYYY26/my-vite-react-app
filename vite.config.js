const { defineConfig } = require("vite");
const reactModule = require("@vitejs/plugin-react");
const babelModule = require("@rolldown/plugin-babel");

const react = reactModule.default || reactModule;
const { reactCompilerPreset } = reactModule;
const babel = babelModule.default || babelModule;

// https://vite.dev/config/
module.exports = defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
});
