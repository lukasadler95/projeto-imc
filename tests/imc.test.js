const calcularIMC = require('../src/imc');

describe('Teste da função calcularIMC', () => {

    test('Deve calcular IMC corretamente', () => {
        expect(calcularIMC(80, 1.80)).toBeCloseTo(24.69, 2);
    });

    test('Deve lançar erro para peso zero', () => {
        expect(() => calcularIMC(0, 1.80))
            .toThrow("Peso e altura devem ser maiores que zero");
    });

    test('Deve lançar erro para altura zero', () => {
        expect(() => calcularIMC(80, 0))
            .toThrow("Peso e altura devem ser maiores que zero");
    });

});