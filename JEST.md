# 📌 **Jest: Descripción, Ventajas y Utilidad**

### 📝 **Descripción**

Jest es un **marco de pruebas en JavaScript** desarrollado por Facebook, diseñado para realizar pruebas unitarias, de integración y de snapshot en aplicaciones frontend y backend. Es ampliamente utilizado en proyectos con **React, React Native, Node.js y TypeScript** debido a su facilidad de configuración y su rapidez en la ejecución de pruebas.

---

### ✅ **Ventajas de Jest**

1️⃣ **Fácil de Configurar**

- Funciona sin necesidad de configuración en la mayoría de los proyectos JavaScript.
- Compatible con **TypeScript** y **Babel** sin esfuerzo adicional.

2️⃣ **Ejecuta Pruebas en Paralelo**

- Jest usa múltiples hilos para ejecutar pruebas simultáneamente, reduciendo el tiempo de ejecución.

3️⃣ **Mocks y Espías Integrados**

- Permite simular funciones, módulos y peticiones HTTP sin necesidad de librerías adicionales.

4️⃣ **Snapshots Testing**

- Captura el estado de la UI y detecta cambios inesperados en componentes de React.

5️⃣ **Cobertura de Código Integrada**

- Genera reportes automáticos para verificar qué partes del código han sido probadas.

6️⃣ **Soporte para Pruebas Asíncronas**

- Compatible con **async/await**, **Promises** y **callbacks**.

---

### 🎯 **Utilidad de Jest**

📌 **Unit Testing (Pruebas Unitarias)**

- Se usa para probar funciones individuales y asegurar que devuelvan los resultados esperados.

📌 **Integration Testing (Pruebas de Integración)**

- Verifica que distintos módulos de la aplicación trabajen correctamente en conjunto.

📌 **Snapshot Testing**

- Útil para probar la UI en **React/React Native**, asegurando que los componentes no cambien inesperadamente.

📌 **Mocking**

- Simula dependencias externas, como APIs o bases de datos, para pruebas más aisladas y rápidas.

📌 **Cobertura de Código**

- Permite identificar qué partes del código han sido probadas y cuáles no.

---

### 🚀 **Ejemplo de Uso con Jest**

📌 **Prueba unitaria de una función de suma:**

```javascript
// sum.js
export const sum = (a, b) => a + b;

// sum.test.js
import { sum } from "./sum";

test("Debe sumar 2 + 3 y devolver 5", () => {
  expect(sum(2, 3)).toBe(5);
});
```

📌 **Ejecutar pruebas con Jest:**

```bash
npm test
```

---

### 🎯 **Conclusión**

Jest es una herramienta poderosa y fácil de usar para garantizar la calidad del código en aplicaciones JavaScript y TypeScript. Su capacidad de ejecución rápida, cobertura de código y soporte para mocks lo convierten en una opción ideal para pruebas en entornos frontend y backend. 🚀

## Instalar JEST en nuestros proyectos

Depedencias necesarias para integrar jest y testing-library en Expo.

- Documentación : [Expo Unit Testing](https://docs.expo.dev/develop/unit-testing/)

```bash
npx expo install @testing-library/react-native "--" --save-dev --force
```

```bash
npx expo install jest-expo jest @types/jest "--" --save-dev
```

```bash
npm install react-test-rendere@18
```

## Desinstalar react-test-rendere

```bash
npm uninstall react-test-rendere
```

Dentro del package.json

```json
{
  "scripts": {
    "test": "jest --watchAll"
  },
  "jest": {
    "preset": "jest-expo"
  }
}
```

```json
"jest": {
  "preset": "jest-expo",
  "transformIgnorePatterns": [
    "node_modules/(?!(?:.pnpm/)?((jest-)?react-native|@react-native(-community)?|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg))"
  ]
}
```
