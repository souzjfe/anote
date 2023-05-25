export interface MenuItemProps {
  icon: string
  title: string
  action: () => void
  isActive?: () => boolean | null
}
