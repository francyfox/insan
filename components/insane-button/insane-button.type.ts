export type InsaneButtonVariant = 'primary' | 'secondary' | 'hero' | 'menu' | 'gray' | 'outline' | ''
export interface InsaneButtonProps {
  variant: InsaneButtonVariant
  isLink?: boolean
  isActive?: boolean
}