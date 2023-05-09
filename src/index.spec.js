const dummy = require('../dummy.json');
const handler = require('./index.js');

/**
 * Comprueba la correcta impresión por consola de las propiedades recibidas.
 * * La respuesta recibida es comparada con la data dummy local, si la API cambia su respuesta, la prueba fallaría.
 */
describe('handler function', () => {
  test('returns the correct properties', async () => {
    const consoleSpy = jest.spyOn(console, 'log');
    
    await handler();

    const properties = dummy;
    properties.content.forEach((property, index) => {
        expect(consoleSpy).toHaveBeenCalledWith(`${index+1} - ${property.title}`);
    });
    consoleSpy.mockRestore();
  });
});