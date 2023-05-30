import { useEffect, useMemo, useState } from 'preact/hooks';
import Editor from '../components/Editor';
import { browser } from 'webextension-polyfill-ts';
import { sendMessageToRuntime, sendMessageToTab } from '../utils/message';
import { Message } from '../utils/message/types';
import {
  getStorageData,
  getStorageItem,
  setStorageItem,
} from '../utils/storage';
import { Main } from './styles';
const sendMessageFromPopup = sendMessageToTab('popup');
const pageUrl = 'url-default';
export const Popup = () => {
  const handleUpdateEditor = (content: string) => {
    //setStorageItem(pageUrl, content);
  };
  const [content, setContent] = useState('');
  // useEffect(() => {
  //   load();
  //   return;

  //   async function load() {
  //     await getStorageItem(pageUrl).then((data) => {
  //       console.log(data);
  //       setContent(data);
  //     });
  //   }
  // }, [pageUrl]);
  // useEffect(() => {
  //   console.log(pageUrl);
  //   getStorageData().then((data) => {
  //     console.log(data);
  //   });
  //   console.log(content);
  // }, [content]);
  return (
    <Main>
      <Editor {...{ content }} onUpdate={handleUpdateEditor} />
    </Main>
  );
};

export default Popup;
