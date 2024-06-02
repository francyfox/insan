import { faker } from '@faker-js/faker';
import type { InsaneTabsItem } from '~/components/insane-tabs/insane-tabs.type';

export const createZakyatTab = (): InsaneTabsItem => {
  return {
    title: faker.lorem.sentence({ min: 5, max: 10 }),
    content: faker.lorem.sentence({ min: 50, max: 100 })
  }
}

export const createZakyatTabs = (count: number): InsaneTabsItem[] => {
  return Array.from({ length: count }, createZakyatTab)
}

export const createZakyatData = () => {
  return {
    nisab: 453,
    tax: 0.025,
  }
}