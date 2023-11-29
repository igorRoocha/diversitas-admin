export class UtilsNumber {
  static convertStrintToFloat(valorString: string): number {
    // Remove os caracteres não numéricos
    const valorNumerico = parseFloat(
      valorString.replace(/[^\d,-]/g, '').replace(',', '.')
    );

    // Verifica se é um número válido
    return isNaN(valorNumerico) ? 0 : valorNumerico;
  }

  static convertStringToNumber(value: string): number {
    // Converte uma string de preço formatada para um número
    // Exemplo: "R$ 1.000,00" para 1000
    return parseFloat(value.replace(/[^0-9.-]/g, '')) / 100;
  }
}
