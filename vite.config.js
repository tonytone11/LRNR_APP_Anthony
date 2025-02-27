import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Allows using global Jest-like test functions
    environment: 'jsdom', // Simulates a browser-like environment for testing
    setupFiles: 'setupTest.js', // Path to test setup file
    css: false, // Disables CSS processing during tests for performance
  },
  server: {
    port: 5173, // Ensure this matches the port in your Cypress config if testing locally
  }
})
