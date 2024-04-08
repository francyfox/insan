import { faker } from '@faker-js/faker'
import { InsaneProgramData } from '~/components/insane-program/insane-program.type'

export const createProgram = (): InsaneProgramData => {
  return {
    title: faker.lorem.sentence(),
    description: faker.lorem.sentence(),
    url: faker.internet.url()
  }
}

export const createProgramList = (count: number): InsaneProgramData[] =>
  Array.from({ length: count }, createProgram)