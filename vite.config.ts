/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    // globals: true //si activamos esta linea podemos dejar de incluir import { describe, expect, test } from "vitest";

  }
})
