// Importing the `defineConfig` function from 'vite'
import { defineConfig } from 'vite';

// Importing the `react` plugin from '@vitejs/plugin-react'
import react from '@vitejs/plugin-react';

// Exporting the Vite configuration using `defineConfig`
export default defineConfig({
  // Configuring plugins, in this case, adding the `react` plugin
  plugins: [react()],
});
