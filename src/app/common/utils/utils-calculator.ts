export class UtilsCalculator {
  static calculatePercent(value: number, percent: number): number {
    // Certifique-se de que percentual esteja na forma decimal (por exemplo, 14,5% é 0,145)
    const percentDecimal = percent / 100;

    // Calcula a porcentagem do valor
    const result = value * percentDecimal;

    return result;
  }
}
