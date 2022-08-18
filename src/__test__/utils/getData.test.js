import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Llamar una API y retornar datos', () => {
    // La siguiente línea es para simular la respuesta de la API
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    // Se le manda aquí cualquier link, pero la respuesta es la anterior
    // Para que todo esto suceda se configuró en el archivo de setupTest.js usando la libreria de jest-fetch-mock
    getData('https://google.com')
      .then((response) => {
        expect(response.data).toEqual('12345');
      });
    //Esta línea es para garantizar que se esta llamando a la URL
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });

  // posibles soluciones que he utilizado:
  // 1. Callback
  test('Llamar una API y retornar datos', (done) => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    getData('https://google.com')
      .then((response) => {
        expect(response.data).toEqual('12345');
        done();
      });
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });

  // 2. Retornar promesa
  test('Llamar una API y retornar datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    return getData('https://google.com')
      .then((response) => {
        expect(response.data).toEqual('12345');
      });
  });

  //  Si no retornas algo en la promesa, todas las pruebas aunque estén mal escritas van a pasar como válidas
  test('Llamar una API y retornar datos', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
    getData('https://google.com')
      .then((response) => {
        return expect(response.data).toEqual('12345');
      });
  });
});
