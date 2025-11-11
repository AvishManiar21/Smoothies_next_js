import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000, // Sets the server to run on port 3000
        open: false, // Disabled auto-open for WSL compatibility
    },
})
