export const formatPrice = (price: number): string => new Intl.NumberFormat('ru', {
  style: 'currency',
  currency: 'RUB',
  maximumSignificantDigits: 3,
}).format(price)
