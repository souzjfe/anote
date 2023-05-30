import Highlight from '@tiptap/extension-highlight';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import History from '@tiptap/extension-history';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import * as S from './styles';
import Toolbar from '../Toolbar';
import { FunctionComponent } from 'preact';
import { EditorProps } from './types';
import { useEffect } from 'preact/hooks';
const Editor: FunctionComponent<EditorProps> = ({ onUpdate, content }) => {
  const editor = useEditor({
    onUpdate: ({ editor }) => !!onUpdate && onUpdate(editor.getHTML()),
    content,
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      Highlight,
      History,
      TaskList,
      TaskItem,
    ],
  });

  useEffect(() => {
    if (editor && content) {
      editor.commands.setContent(content);
    }
  }, [editor, content]);

  return (
    <S.Editor>
      {editor && <Toolbar {...{ editor }} />}
      <S.Content {...{ editor }} />
    </S.Editor>
  );
};
export default Editor;
