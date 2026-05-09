function calcularIMC(peso, altura) {
    if (peso <= 0 || altura <= 0) {
        throw new Error("Peso e altura devem ser maiores que zero");
    }
    return peso / (altura * altura);
}

module.exports = calcularIMC;