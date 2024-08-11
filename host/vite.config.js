// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import federation from '@originjs/vite-plugin-federation';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       name: 'host',
//       filename: 'remoteEntry.js',
//       exposes: {},
//       remotes: {
//         remote: 'http://127.0.0.1:5173/assets/remoteEntry.js',
//         // remote: 'http://localhost:5001/assets/remoteEntry.js',
//         // remote: 'http://localhost:5002/assets/remoteEntry.js',
//         // remote: 'http://127.0.0.1:5002/assets/remoteEntry.js',
//       },
//       shared: ['react', 'react-dom'],
//     }),
//   ],
//   build: {
//     modulePreload: false,
//     target: 'esnext',
//     minify: false,
//     cssCodeSplit: false,
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      filename: 'remoteEntry.js',
      exposes: {},
      remotes: {
        remote: 'http://localhost:5002/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});