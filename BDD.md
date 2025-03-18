

# ¿Qué es BDD?

**Behavior-Driven Development (BDD)** es una metodología de desarrollo de software que se enfoca en la colaboración entre desarrolladores, testers y no programadores, para definir el comportamiento esperado de una funcionalidad antes de implementarla. BDD usa un lenguaje claro y comprensible para todos los miembros del equipo, basado en ejemplos de comportamiento que describen cómo debe funcionar una aplicación desde el punto de vista del usuario.

El ciclo en BDD sigue un proceso en el que las especificaciones del comportamiento se escriben en una forma de lenguaje natural, y se utilizan para guiar el desarrollo de la funcionalidad.

### Ciclo BDD

1. **Escribir ejemplos (Given-When-Then)**: Se definen ejemplos de comportamiento del sistema utilizando un formato sencillo que todo el equipo pueda entender. Estos ejemplos se describen usando las palabras clave **Given**, **When**, y **Then**.
   - **Given**: El contexto o la situación inicial.
   - **When**: La acción o evento que ocurre.
   - **Then**: El resultado esperado tras la acción.

2. **Desarrollar la funcionalidad**: Se implementa el código necesario para cumplir con los comportamientos definidos en los ejemplos.

3. **Verificar el comportamiento**: Se ejecutan las pruebas basadas en los ejemplos para asegurarse de que el sistema se comporta de la manera esperada.

### Estructura de Pruebas en BDD

Las pruebas en BDD se encuentran en archivos que suelen tener nombres descriptivos y legibles, basados en las funcionalidades del sistema. Las pruebas se agrupan en función de las funcionalidades que están probando, y se expresan en términos del comportamiento del sistema.

### Ejemplo de una prueba BDD

Un ejemplo básico de BDD en una funcionalidad de suma podría verse de la siguiente manera:

1. **Escribir un ejemplo de comportamiento**:

   ```gherkin
   Feature: Sumar dos números

     Scenario: Sumar dos números positivos
       Given que el número A es 1
       And el número B es 2
       When sumo A y B
       Then el resultado debe ser 3
   ```

2. **Implementar el código para pasar la prueba**:

   ```javascript
   // sumar.js
   function sumar(a, b) {
     return a + b;
   }
   ```

3. **Escribir la prueba para verificar el comportamiento**:

   ```javascript
   // sumar.test.js
   describe("Suma de dos números", () => {
     it("debe sumar dos números positivos correctamente", () => {
       expect(sumar(1, 2)).toBe(3);
     });
   });
   ```

4. **Ejecutar la prueba**:

   Ejecutar las pruebas automáticamente usando una herramienta como **Jest** o **Cucumber**. El código debe estar implementado para que pase la prueba que refleja el comportamiento esperado.

### Ejecutar las Pruebas

Una vez que hayas instalado todas las dependencias y configurado las herramientas necesarias, puedes ejecutar las pruebas usando el siguiente comando (si usas Jest, por ejemplo):

```bash
npm run test
```

Las pruebas se ejecutarán automáticamente, y verás los resultados en la consola.

### Beneficios de BDD

- **Colaboración**: BDD fomenta la colaboración entre todos los miembros del equipo, incluyendo desarrolladores, testers y no-programadores, para crear una comprensión común de los requisitos.
- **Lenguaje claro**: Los ejemplos escritos en lenguaje natural son fáciles de entender por todos los involucrados en el proyecto, lo que facilita la comunicación y reduce malentendidos.
- **Mejor cobertura de pruebas**: Al escribir los comportamientos antes de la implementación, las pruebas cubren los casos de uso más importantes y el comportamiento esperado del sistema.
- **Documentación viviente**: Los ejemplos se convierten en una forma de documentación viviente que siempre está actualizada, ya que se ejecutan como pruebas automáticas.

### Conclusión

El enfoque **BDD** permite desarrollar software de manera más efectiva y en colaboración, asegurando que todas las partes interesadas (desarrolladores, testers, clientes) tengan una comprensión común del comportamiento esperado del sistema. Siguiendo el ciclo de **Escribir ejemplos, Desarrollar la funcionalidad, Verificar el comportamiento**, se asegura que la funcionalidad desarrollada cumple con las expectativas de negocio, lo que mejora la calidad del software y su alineación con los requisitos del usuario.