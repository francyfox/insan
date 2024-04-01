export interface InsaneCardData {
  id: number
  city?: string
  location_id?: number
  title: string
  url: string
  short: string
  share_text: string
  description: string
  created: string
  unixtime: number
  done: string
  collect_money: number
  end_money: number
  collection_closing_date?: number
  name: string
  sick: string
  finish: number
  in_priority: number
  files: any[]
  preview: string
  video_url?: string
  number_of_people_helping: number
  images: string[]
}
export interface InsaneCardProps {
  data: InsaneCardData
  isLoading: boolean
}