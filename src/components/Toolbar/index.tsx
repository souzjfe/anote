// import React from 'react';
// import classNames from 'classnames';
import { Editor } from '@tiptap/react';
import { FunctionComponent } from 'preact';
// import useInView from 'react-cool-inview';
import {
  RiBold,
  RiItalic,
  RiStrikethrough,
  RiCodeSSlashLine,
  RiH1,
  RiH2,
  RiParagraph,
  RiListOrdered,
  RiListUnordered,
  RiCodeBoxLine,
  RiLink,
  RiListCheck2,
  RiLinkUnlink,
  RiMarkPenLine,
  RiDoubleQuotesL,
  RiSeparator,
  RiTextWrap,
  RiFormatClear,
  RiArrowGoBackLine,
  RiArrowGoForwardLine,
} from 'react-icons/ri';
import { ToolbarItem, ToolbarProps } from './types';
import * as S from './styles';

const Toolbar: FunctionComponent<ToolbarProps> = ({ editor }) => {
  const items: Array<ToolbarItem> = [
    {
      type: 'button',
      Icon: () => <RiBold />,
      title: 'Bold',
      onClick: () => editor.chain().focus().toggleBold().run(),
      disabled: editor.isActive('bold'),
    },
    {
      type: 'button',
      Icon: () => <RiItalic />,
      title: 'Italic',
      onClick: () => editor.chain().focus().toggleItalic().run(),
      disabled: editor.isActive('italic'),
    },
    {
      type: 'button',
      Icon: () => <RiStrikethrough />,
      title: 'Strike',
      onClick: () => editor.chain().focus().toggleStrike().run(),
      disabled: editor.isActive('strike'),
    },
    {
      type: 'button',
      Icon: () => <RiCodeSSlashLine />,
      title: 'Code',
      onClick: () => editor.chain().focus().toggleCode().run(),
      disabled: editor.isActive('code'),
    },
    {
      type: 'button',
      Icon: () => <RiMarkPenLine />,
      title: 'Highlight',
      onClick: () => editor.chain().focus().toggleHighlight().run(),
      disabled: editor.isActive('highlight'),
    },
    {
      type: 'divider',
    },
    {
      type: 'button',
      Icon: () => <RiH1 />,
      title: 'Heading 1',
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      disabled: editor.isActive('heading', { level: 1 }),
    },
    {
      type: 'button',
      Icon: () => <RiH2 />,
      title: 'Heading 2',
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      disabled: editor.isActive('heading', { level: 2 }),
    },
    {
      type: 'button',
      Icon: () => <RiParagraph />,
      title: 'Paragraph',
      onClick: () => editor.chain().focus().setParagraph().run(),
      disabled: editor.isActive('paragraph'),
    },
    {
      type: 'button',
      Icon: () => <RiListUnordered />,
      title: 'Bullet List',
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      disabled: editor.isActive('bulletList'),
    },
    {
      type: 'button',
      Icon: () => <RiListOrdered />,
      title: 'Ordered List',
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      disabled: editor.isActive('orderedList'),
    },
    {
      type: 'button',
      Icon: () => <RiListCheck2 />,
      title: 'Task List',
      onClick: () => editor.chain().focus().toggleTaskList().run(),
      disabled: editor.isActive('taskList'),
    },
    {
      type: 'button',
      Icon: () => <RiCodeBoxLine />,
      title: 'Code Block',
      onClick: () => editor.chain().focus().toggleCodeBlock().run(),
      disabled: editor.isActive('codeBlock'),
    },
    {
      type: 'divider',
    },
    {
      type: 'button',
      Icon: () => <RiDoubleQuotesL />,
      title: 'Blockquote',
      onClick: () => editor.chain().focus().toggleBlockquote().run(),
      disabled: editor.isActive('blockquote'),
    },
    {
      type: 'button',
      Icon: () => <RiSeparator />,
      title: 'Horizontal Rule',
      onClick: () => editor.chain().focus().setHorizontalRule().run(),
    },
    {
      type: 'divider',
    },
    {
      type: 'button',
      Icon: () => <RiFormatClear />,
      title: 'Clear Format',
      onClick: () => editor.chain().focus().clearNodes().unsetAllMarks().run(),
    },
    {
      type: 'divider',
    },
    {
      type: 'button',
      Icon: () => <RiArrowGoBackLine />,
      title: 'Undo',
      onClick: () => editor.commands.undo(),
      disabled: !editor.can().undo(),
    },
    {
      type: 'button',
      Icon: () => <RiArrowGoForwardLine />,
      title: 'Redo',
      onClick: () => editor.commands.redo(),
      disabled: !editor.can().redo(),
    },
  ];
  return (
    <S.Nav>
      {items.map((item) =>
        item.type === 'button' ? (
          <S.IconButton {...item}>
            <item.Icon />
          </S.IconButton>
        ) : (
          <S.Divider />
        ),
      )}
    </S.Nav>
  );
};

export default Toolbar;
