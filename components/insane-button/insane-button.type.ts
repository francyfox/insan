export type InsaneButtonVariant = 'primary' | 'secondary' | 'hero' | 'menu' | 'gray' | 'outline' | 'secondary-form' | ''
export interface InsaneButtonProps {
  variant: InsaneButtonVariant
  isLink?: boolean
  isActive?: boolean
}