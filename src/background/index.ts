import { browser } from 'webextension-polyfill-ts';
import { Message } from '../utils/message/types';
import { sendMessageToTab } from '../utils/message';

console.info('chrome-ext template-preact-ts background script');

export {};
// const sendMessageFromBackground = sendMessageToTab('background');

// browser.runtime.onMessage.addListener((message: Message) => {
//   switch (message.from) {
//     case 'popup':
//       if (message.content.editorContent) {
//         console.log(message.content.editorContent);
//         browser.tabs
//           .query({ active: true, currentWindow: true })
//           .then((tabs) => {
//             if (tabs[0].id) {
//               sendMessageFromBackground(tabs[0].id, { request: 'url' }).then(
//                 (response) => {
//                   console.log(response);
//                 },
//               );
//             }
//           });
//       }

//       break;
//     case 'content':
//       console.log(message);
//       break;
//     default:
//       console.log('Message from not found');
//   }
// });
