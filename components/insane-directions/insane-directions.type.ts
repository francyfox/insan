export interface InsaneDirectionsItem {
  title: string
  icon: {
    width: number
    height: number
    alt: string
    src: string
  }
}
export interface InsaneDirectionsProps {
  data: InsaneDirectionsItem[]
}