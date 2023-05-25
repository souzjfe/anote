import { Editor } from '@tiptap/core'
import { MenuItemProps } from '../MenuItem/types'

export interface MenuBarProps {
  editor: Editor | null
}
interface Divider {
  type: 'divider'
}
interface Icon {
  type: 'icon'
}
export type MenuItemType = (Icon & MenuItemProps) | Divider
