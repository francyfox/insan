import { InsaneArticleData } from '~/components/insane-article/insane-article.type';
import { faker } from '@faker-js/faker'

export const createArticle = (): InsaneArticleData => {
  return {
    image: faker.image.url({ width: 650, height: 550 }),
    title: faker.lorem.sentence(),
    description: faker.lorem.sentence(),
    url: faker.internet.url()
  }
}

export const createArticleList = (count: number): InsaneArticleData[] =>
  Array.from({ length: count }, createArticle)