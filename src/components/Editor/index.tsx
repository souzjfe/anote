import Highlight from '@tiptap/extension-highlight'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useCallback, useEffect, useState } from 'preact/hooks'
import MenuBar from '../MenuBar'
import * as S from './styles'
export default () => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      Highlight,
      TaskList,
      TaskItem,
    ],
  })

  return (
    <S.Editor>
      {editor && <MenuBar {...{ editor }} />}
      <S.Content {...{ editor }} />
    </S.Editor>
  )
}
