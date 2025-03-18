# ¿Qué es TDD?

**Test-Driven Development (TDD)** es una metodología de desarrollo de software que se enfoca en escribir las pruebas antes de implementar la lógica del código. El ciclo de desarrollo en TDD sigue tres pasos principales:

1. **Escribir una prueba**: Antes de escribir cualquier lógica, escribimos una prueba que describa el comportamiento esperado de una funcionalidad.
2. **Implementar el código**: Escribimos el código suficiente para pasar la prueba.
3. **Refactorizar**: Mejoramos el código sin cambiar su comportamiento, asegurándonos de que las pruebas sigan pasando.

Este ciclo se repite hasta que la funcionalidad está completamente implementada y probada.

### Ciclo TDD

1. **Rojo (Red)**: Escribe una prueba que falle. Esto asegura que la prueba es válida y que el comportamiento que se va a implementar no está presente aún.
2. **Verde (Green)**: Implementa el código necesario para que la prueba pase.
3. **Refactorizar (Refactor)**: Mejora el código, manteniendo las pruebas verdes. Este paso asegura que el código sea limpio y eficiente.


## Estructura de Pruebas

Las pruebas en este proyecto se encuentran en el directorio `__tests__` o en archivos con la extensión `.test.ts`. Se agrupan en carpetas según el área funcional del código que están probando.

Cada archivo de prueba contiene pruebas específicas que siguen el ciclo de TDD.

### Ejemplo de una prueba TDD

Un ejemplo básico de TDD en una función de suma podría verse así:

1. **Rojo (Red)**: Escribimos una prueba que falle:

   ```javascript
   // sum.test.js
   test("should add two numbers", () => {
     expect(add(1, 2)).toBe(3);
   });
   ```

2. **Verde (Green)**: Escribimos el código necesario para pasar la prueba:

   ```javascript
   // sum.js
   function add(a, b) {
     return a + b;
   }
   ```

3. **Refactorizar (Refactor)**: Mejoramos el código si es necesario. En este caso, el código ya está limpio, así que no se requiere cambios.

## Ejecutar las Pruebas

Una vez que hayas instalado todas las dependencias, puedes ejecutar las pruebas usando **Jest**.

Para ejecutar las pruebas:

```bash
npm run test
```

Las pruebas se ejecutarán automáticamente y verás los resultados en la consola.

## Beneficios de TDD

- **Código más confiable**: Al escribir pruebas antes de implementar el código, te aseguras de que todas las funcionalidades estén correctamente cubiertas.
- **Refactorización segura**: Las pruebas actúan como una red de seguridad que te permite refactorizar el código sin temor a romper la funcionalidad.
- **Documentación automática**: Las pruebas también sirven como documentación para los desarrolladores, ya que muestran cómo se espera que funcione el código.

## Conclusión

El enfoque TDD ayuda a mantener un código limpio y confiable a lo largo del ciclo de vida del proyecto. Siguiendo el ciclo de **Rojo, Verde, Refactor**, podemos asegurarnos de que las funcionalidades que implementemos estén correctamente probadas, lo que mejora la calidad del software y facilita la mantenibilidad.
