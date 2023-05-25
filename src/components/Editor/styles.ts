import styled from 'styled-components'
import { EditorContent } from '@tiptap/react'

export const Editor = styled.div`
  * + * {
    margin-top: 0.75em;
  }

  display: flex;
  flex-direction: column;

  ul,
  ol {
    padding: 0 1rem;
  }
  div[contentEditable='true'] {
    padding: 0 1em;
    outline: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    font-size: 0.8rem;
  }

  pre {
    background: #0d0d0d;
    border-radius: 0.5rem;
    color: #fff;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
  }

  mark {
    background-color: #faf594;
  }

  img {
    height: auto;
    max-width: 100%;
  }

  hr {
    margin: 1rem 0;
  }

  blockquote {
    border-left: 2px solid rgba(#0d0d0d, 0.1);
    padding-left: 1rem;
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#cbc8c8, 0.1);
    margin: 2rem 0;
  }

  ul[data-type='taskList'] {
    list-style: none;
    padding: 0;
  }
  li {
    align-items: center;
    display: flex;
  }
  label {
    flex: 0 0 auto;
    margin-right: 0.5rem;
    user-select: none;
  }

  div {
    flex: 1 1 auto;
  }
`
export const Content = styled(EditorContent)`
  -webkit-overflow-scrolling: touch;
  margin: 0;
  flex: 1 1 auto;
  overflow-x: hidden;
  overflow-y: auto;
`