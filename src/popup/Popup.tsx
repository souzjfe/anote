import { useEffect, useMemo, useState } from 'preact/hooks';
import './Popup.css';
import Editor from '../components/Editor';
import { browser } from 'webextension-polyfill-ts';
import { sendMessageToRuntime, sendMessageToTab } from '../utils/message';
import { Message } from '../utils/message/types';
import {
  getStorageData,
  getStorageItem,
  setStorageItem,
} from '../utils/storage';
const sendMessageFromPopup = sendMessageToTab('popup');
const pageUrl = await browser.tabs
  .query({ active: true, currentWindow: true })
  .then((tabs) => {
    if (tabs[0].id) {
      return sendMessageFromPopup(tabs[0].id, { request: 'url' }).then(
        (response) => {
          return response.pageUrl;
        },
      );
    }
  });
export const Popup = () => {
  const handleUpdateEditor = (content: string) => {
    setStorageItem(pageUrl, content);
  };
  const [content, setContent] = useState('');
  useEffect(() => {
    load();
    return;

    async function load() {
      await getStorageItem(pageUrl).then((data) => {
        console.log(data);
        setContent(data);
      });
    }
  }, [pageUrl]);
  useEffect(() => {
    console.log(pageUrl);
    getStorageData().then((data) => {
      console.log(data);
    });
    console.log(content);
  }, [content]);
  return (
    <main>
      <Editor {...{ content }} onUpdate={handleUpdateEditor} />
    </main>
  );
};

export default Popup;
