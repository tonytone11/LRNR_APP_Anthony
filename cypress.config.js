import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) { },
    baseUrl: 'https://lrnr-app.vercel.app/'
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite'
    }
  }
})