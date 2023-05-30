export interface Message<MessageType = unknown> {
  from: MessageFrom;
  content: MessageContent<MessageType>;
}
export type MessageFrom = 'popup' | 'options' | 'content' | 'background';

export type MessageContent<MessageType = unknown> = {
  [key: string]: string | number | boolean | MessageType;
};
