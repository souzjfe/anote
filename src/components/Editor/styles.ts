import { EditorContent } from '@tiptap/react';
import tw, { styled } from 'twin.macro';

export const Editor = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Content = styled(EditorContent)`
  div[contentEditable='true'] {
    padding: 0 1em;
    outline: none;
    min-height: 12.5rem;
    overflow-y: auto;
  }
  ${tw`py-2`}

  p,
  pre {
    ${tw`text-sm`}
  }
  ul,
  ol {
    padding: 0 1rem;
  }

  h1 {
    ${tw`text-5xl`};
  }

  h2 {
    ${tw`text-4xl`};
  }

  h3 {
    ${tw`text-3xl`};
  }

  h4 {
    ${tw`text-2xl`};
  }

  h5 {
    ${tw`text-xl`};
  }

  h6 {
    ${tw`text-lg`};
  }

  pre {
    ${tw`mockup-code px-4`}
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
    ${tw`border-0 divider`}
  }

  ul {
    ${tw`list-disc`}
  }
  ul {
    ${tw`p-0`}
    > li {
      ${tw`flex items-center`}
    }
  }
  ol {
    ${tw`list-decimal`}
  }

  ul[data-type='taskList'] {
    li {
      > label {
        ${tw`flex items-center mr-2`}
        > input[type='checkbox'] {
          ${tw`checkbox checkbox-xs checkbox-primary`}
        }
      }
      &[data-checked='true'] {
        > div {
          ${tw`line-through opacity-80`}
        }
      }
    }
  }
`;
