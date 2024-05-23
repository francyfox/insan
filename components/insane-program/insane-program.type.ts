export interface InsaneProgramData {
  id: number
  title: string
  description: string
  short: string
  url: string
}

export interface InsaneProgramProps {
  data: InsaneProgramData & null[],
  isLoading: boolean
}