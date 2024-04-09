export type InsaneButtonVariant = 'primary' | 'secondary' | 'hero' | 'menu' | 'gray'
export interface InsaneButtonProps {
  variant: InsaneButtonVariant
  isLink?: boolean
  isActive?: boolean
}