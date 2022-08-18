# Unit Test a proyecto Platzi Store

**Curso de Pruebas unitarias con Jest**

Es muy importante entender que para cada prueba es necesario comprender el funcionamiento de nuestro proyecto, o al menos de la parte o del componente a quien se le va a realizar los tests.

## Documentación de Jest

En el siguiente link encontrarás la documentación de [Jest](https://jestjs.io/docs/getting-started).

Esta es otra documentación de [Jest](https://deltice.github.io/jest/) para Mocks entre otras cosas.

## Documentación de Testing Library

En el siguiente link encontrarás la documentación de [Testing Library](https://testing-library.com/).

## Instalación de Jest

Con el comando de abajo, se puede instalar jest en nuestro proyecto. **"--save-dev"** es un flag que nos sirve para que automáticamente se agregue a nuestras dependencias en el archivo de **package.json**. Cabe mencionar que esta forma instala la última versión de Jest.

```bash
npm install jest --save-dev
```

## Algunos tips

- Los nombres de las carpetas de los tests normalmente se escriben de la siguiente forma **\_\_test\_\_**.

- En cuestión de los nombres de los archivos test unitario; comúnmente se usa el mismo nombre del componente o del archivo. ejemplo: El componente se llama **Header**, entonces el unit test será: **Header.test.js**. La extensión final puede variar dependiendo de cómo se quiera trabajar (JS, JSX, TS o TSX).

- Para ejecutar algún archivo o archivos tests es necesario tener instalado Jest de forma global en la computadores; para ello usamos el siguiente comando.

```bash
npm install -g jest
```

- Teniendo Jest instaldo de forma global, podemos ejecutar los archivos **tests** con lo siguient:

```bash
jest src/del/archivo/name.test.js
```

- Para tener disponibles los tipos en VSCode se instalan de la siguiente manera:
  
```bash
npm i -D @types/jest
```

- Esta función es muy buena para generar una URL y ver como están construido el componente y cómo generar correctamenta las Queries: **screen.logTestingPlaygroundURL()**

- Los **mocks** que se creen en el proyecto, se acostubran colocarlos en una carpeta llama **\_\_mocks\_\_**.

### ¿Cómo sacarle provecho a screen.logTestingPlaygroundURL()?

En algunos momentos, es un poco complejo lograr generar una query para seleccionar alguna etiqueta del DOM y ealizar el unit test correctamente. El método **logTestingPlaygroundURL()** de **screen**  nos úede ayudar un poco a resolver este problema.

Una vez que el link sea generado en la terminal, se copia y se coloca en un navegador; ahí se mostrará todas las etiquetas que se están renderizando. Al seleccionar alguna, en la parte de abajo aparecerá como se haría la query para seleccionar dicha parte de la página.

### Script en package.json para el test y watch con Jest

```Json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch"
}
```

### Instalación de enzyme en React

Es importante tener en cuenta la versión de React con la que se este trabajando. Es importante incluir los **scripts** de **test** y **test:watch**.

Cabe mencionar que **React Testing Library** puede sustituir a **enzyme**.


```bash
npm install jest enzyme-adapter-react-18 --save-dev
```

### Mock para evitar problemas con los estilos

Primero se crea el archivo mock con el algún nombre adecuado; por ejemplo **styleMock.js**, y dentro del archivo lo siguiente.

```javascript
module.exports = {};
```

Ahora en el package.json se incluye lo siguiente en la sección de Jest:

```json
"jest": {
  "moduleNameMapper": {
    "\\.(styl|css)$": "<rootDir>/src/__mocks__/styleMock.js"
  }
}
```

***Importante***. En caso que lo anterior aún marque error, se puede instala lo que indica el comando de abajo, y se modifica la sección mostrada arriba:

```bash
npm install jest-enviroment-jsdom --save-dev
```

```json
"jest": {
  "moduleNameMapper": {
    "\\.(styl|css)$": "<rootDir>/src/__mocks__/styleMock.js"
  },
  "testEnviroment": "jsdom"
}
```

### Snapshots con Jest

En el siguiente link encontrarás la documentación de los [Snapshots](https://goo.gl/fbAQLP).

Para su instalación ocupas lo siguiente:

```bash
npm install react-test-renderer --save-dev
```

En caso de necesitar alguna versión en específica usas lo siguiente, indicando la versión deseada:

```bash
npm install react-test-renderer@14.4.0 --save-dev
```

En caso de que exista una modificación en la UI, se puede aceptar el cambio en los Snapshot con lo siguiente:

```bash
jest --updateSnapshot
```