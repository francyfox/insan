import type { InsaneAccordionItem } from '~/components/insane-accordion/insane-accordion.type'
import { faker } from '@faker-js/faker'

export const createQaAccordionItem = (): InsaneAccordionItem => {
  return {
    title: faker.lorem.sentence({ min: 10, max: 20}),
    body: faker.lorem.sentence({ min: 50, max: 100 })
  }
}
export const createQaAccordionList = (count: number): InsaneAccordionItem[]  => {
  return Array.from({ length: count }, createQaAccordionItem)
}