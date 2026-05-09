const ERROR_MESSAGE =
  'Peso e altura devem ser números válidos maiores que zero';

function validarEntradas(peso, altura) {
  if (
    typeof peso !== 'number' ||
    typeof altura !== 'number' ||
    Number.isNaN(peso) ||
    Number.isNaN(altura) ||
    peso <= 0 ||
    altura <= 0
  ) {
    throw new Error(ERROR_MESSAGE);
  }
}

function calcularIMC(peso, altura) {
  validarEntradas(peso, altura);

  const imc = peso / (altura * altura);

  return Number(imc.toFixed(2));
}

module.exports = calcularIMC;