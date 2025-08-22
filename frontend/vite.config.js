import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss({
     config: {
        theme: {
          extend: {
            keyframes: {
              fadeIn: {
                "0%": { opacity: "0", transform: "scale(0.9)" },
                "100%": { opacity: "1", transform: "scale(1)" },
              },
              fadeOut: {
                "0%": { opacity: "1", transform: "scale(1)" },
                "100%": { opacity: "0", transform: "scale(0.9)" },
              },
            },
            animation: {
              fadeIn: "fadeIn 0.3s ease-out",
              fadeOut: "fadeOut 0.3s ease-in",
            },
          },
        },
      },
  }),
],
})
