import Highlight from '@tiptap/extension-highlight'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import './styles.css'
import { useCallback, useEffect, useState } from 'preact/hooks'
import MenuBar from '../MenuBar'

export default () => {
  const [status, setStatus] = useState('connecting')

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

  // Save current user to localStorage and emit to editor

  return (
    <div className="editor">
      {editor && <MenuBar editor={editor} />}
      <EditorContent className="editor__content" editor={editor} />
    </div>
  )
}
