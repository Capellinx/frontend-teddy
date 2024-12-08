import {formatCurrencyToReal} from './format-currency-to-real.ts';

export function transformCentsToInteger(num: number): string {
  return formatCurrencyToReal(num / 100)
}