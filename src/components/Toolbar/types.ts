import { Editor } from '@tiptap/react';
import { IconType } from 'react-icons';
export interface ToolbarProps {
  editor: Editor;
}
export interface ToolbarButtomProps {
  type: 'button';
  Icon: IconType;
  title: string;
  onClick: () => void;
  disabled?: boolean;
}
interface ToolbarDividerProps {
  type: 'divider';
}
export type ToolbarItem = ToolbarButtomProps | ToolbarDividerProps;
