import { faker } from '@faker-js/faker';
import type { InsaneCardData } from '~/components/insane-card/insane-card.type';

export const createNeedHelpPerson = (): InsaneCardData => {
  return {
    id: faker.number.int(),
    city: faker.location.streetAddress(),
    location_id: faker.number.int(),
    title: faker.lorem.sentence(),
    url: faker.internet.url(),
    short: faker.lorem.sentence(),
    share_text: faker.lorem.sentence(),
    description: faker.lorem.sentence({ min: 100, max: 500 }),
    created: faker.date.recent(),
    unixtime: new Date(faker.date.recent()).getTime() / 1000,
    done: faker.lorem.sentence(),
    collect_money: faker.number.int({ min: 0, max: 1000}),
    end_money: faker.number.int({ min: 1000, max: 1500 }),
    collection_closing_date: new Date(faker.date.recent()).getTime() / 1000,
    name: faker.person.fullName(),
    sick: faker.lorem.sentence(),
    finish: faker.number.int({ min: 0, max: 1 }),
    in_priority: faker.number.int({ min: 0, max: 1 }),
    number_of_people_helping: faker.number.int({ min: 0, max: 10 }),
    files: [],
    images: Array.from({ length: 3 }, () => faker.image.url() ),
    preview: faker.image.url()
  }
}
export const createNeedHelpPersons = (count: number) =>
  Array.from({ length: count }, createNeedHelpPerson)