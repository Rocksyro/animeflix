# Docs

## Implementar tests con vitest

Link https://vitest.dev/guide/

- Instalar dependencias

```bash
  npm i -D vitest jsdom
```

- Configurar entorno en `vite.config.ts`

```jsx
/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
});
```

- En `package.json` agregamos un nuevo script de test

```json
    "test": "vitest"
```

- Creamos un archivo para el test de un componente ejemplo `Slide.test.jsx`

```jsx
import { describe, expect, test } from "vitest";

// describe sirve para agrupar distintos test
describe("Test from <Slide />", () => {
  // test son los test unitarios
  test("should add two numbers", () => {
    // expect sería lo que espera este test
    expect(1 + 1).toBe(2);
  });
});
```

- Ejecutamos el test con el comando `npm test` donde va a devolvernos por consola el resultado de los test configurados.

Posicionados en la terminal si presionamos `h` nos muestra diversas opciones

### Opcional Interfaz web

- Instalar el interfaz ui para ver los test por el navegador

```bash
npm i -D @vitest/ui
```

- En package.json actualizar el script

```json
"test": "vitest --ui"
```

// Minuto 20 Video
