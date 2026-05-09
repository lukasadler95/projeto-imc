const calcularIMC = require('../src/imc');

describe('Teste da função calcularIMC', () => {
  test('Deve calcular IMC corretamente', () => {
    expect(calcularIMC(80, 1.8)).toBe(24.69);
  });

  test('Deve lançar erro para peso zero', () => {
    expect(() => calcularIMC(0, 1.8)).toThrow();
  });

  test('Deve lançar erro para altura zero', () => {
    expect(() => calcularIMC(80, 0)).toThrow();
  });

  test('Deve lançar erro para números negativos', () => {
    expect(() => calcularIMC(-80, 1.8)).toThrow();
  });

  test('Deve lançar erro para strings', () => {
    expect(() => calcularIMC('80', '1.8')).toThrow();
  });

  test('Deve lançar erro para valores nulos', () => {
    expect(() => calcularIMC(null, null)).toThrow();
  });

  test('Deve lançar erro para NaN', () => {
    expect(() => calcularIMC(NaN, NaN)).toThrow();
  });
});