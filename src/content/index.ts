import { browser } from 'webextension-polyfill-ts';
import { sendMessageToRuntime } from '../utils/message';
import { Message } from '../utils/message/types';

const sendMessageFromContent = sendMessageToRuntime('content');

chrome.runtime.onMessage.addListener(
  (message: Message, _sender, senderResponse) => {
    switch (message.from) {
      case 'popup':
        if (message.content.request === 'url') {
          senderResponse({
            pageUrl: window.location.href.split('//')[1].split('/')[0],
          });
        }
        break;
    }
  },
);

export {};
