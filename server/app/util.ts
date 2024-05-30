export const formatPrice = (price: number): string => new Intl.NumberFormat('ru', {
  style: 'currency',
  currency: 'RUB',
  maximumSignificantDigits: 3,
}).format(price)


// TODO: Выглядит костыльно
export const crumbsReplaceSlug = (crumbs: any[], slug: string, newSlug: string): any[] => {
  const last = crumbs.pop()
  crumbs.push({
    label: newSlug,
    labelArea: newSlug,
    to: last.to.replace(slug, newSlug)
  })

  return crumbs
}

export const crumbsReplaceId = (crumbs: any[], slug: string): any[] => {
  const last = crumbs.pop()
  crumbs.push({
    label: slug,
    labelArea: slug,
    to: last.to
  })

  return crumbs
}

export const formatCount = (count: number): string => {
  return new Intl.NumberFormat('ru', { maximumSignificantDigits: 3 })
    .format(count)
}

export const parseCurrency = (input: string) => {
  const nums = input.replace(/(,|\₽|\s)/g, '').trim()
  if (/^\d+(\.(\d+)?)?$/.test(nums)) return Number(nums)
  return nums === '' ? null : Number.NaN
}

export const formatCurrency = (value: number | null) => {
  if (value === null) return ''
  return `${value.toLocaleString('en-US')} ₽`
}