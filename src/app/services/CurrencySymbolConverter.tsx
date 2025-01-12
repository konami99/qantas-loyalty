
export class CurrencySymbolConverter {
  static convert(currency: string): string {
    switch(currency) {
      case 'AUD': {
        return '$';
      }
      default: {
        return '$'
      }
    }
  }
}