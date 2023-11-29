import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { UtilsString } from '../utils/utils-string';

@Directive({
  selector: '[currencyFormat]',
})
export class CurrencyFormatDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('input', ['$event']) onInput(event: InputEvent): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (UtilsString.isNotEmpty(value)) {
      const floatValue = parseFloat(value) / 100;
      value = (floatValue).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).replace('R$', '').trim();
      
    } else {
      value = 'R$ 0,00';
    }

    this.renderer.setProperty(input, 'value', value);
  }
}
