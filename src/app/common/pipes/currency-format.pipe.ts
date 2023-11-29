import { Pipe, PipeTransform } from '@angular/core';
import { UtilsString } from '../utils/utils-string';

@Pipe({
  name: 'currencyFormat',
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!UtilsString.isNotEmpty(value)) {
      return 'R$ 0,00';
    }

    // Converte o valor para string e separa a parte inteira e decimal
    value = value.replace(/\D/g, ''); // Remove caracteres não numéricos

    value = (parseFloat(value) / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    return value;
  }
}
