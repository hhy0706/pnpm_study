import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: 'index.ts',
      name: 'Lib',
      fileName: (format) => `lib.${format}.js`,
    },
  },
});