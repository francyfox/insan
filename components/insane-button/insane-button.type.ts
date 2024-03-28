export type InsaneButtonVariant = 'primary' | 'secondary' | 'banner' | 'menu' | 'gray'
export interface InsaneButtonProps {
  variant: InsaneButtonVariant
  isLink?: boolean
}