export interface InsaneArticleData {
  id: number
  image: string
  title: string
  short: string
  description: string
}
export interface InsaneArticleProps {
  data: InsaneArticleData & null[]
  isLoading: boolean
  url: string
}