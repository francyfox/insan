export const formatPrice = (price: number): string => new Intl.NumberFormat('ru', {
  style: 'currency',
  currency: 'RUB',
  maximumSignificantDigits: 3,
}).format(price)


// TODO: Выглядит костыльно
export const crumbsReplaceSlug = (crumbs: any[], slug: string, newSlug: string): any[] => {
  console.log(crumbs)
  const last = crumbs.pop()
  crumbs.push({
    label: newSlug,
    labelArea: newSlug,
    to: last.to.replace(slug, newSlug)
  })

  return crumbs
}