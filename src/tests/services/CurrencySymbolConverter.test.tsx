import { CurrencySymbolConverter } from "../../app/services/CurrencySymbolConverter";

describe('convert', () => {
  it('returns correct currency symbol', () => {
    expect(CurrencySymbolConverter.convert('AUD')).toEqual('$');
  })

  it('returns a default', () => {
    expect(CurrencySymbolConverter.convert('IUDZZ')).toEqual('$');
  })
})