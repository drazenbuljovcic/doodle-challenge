import clsx from 'clsx';
import { FC } from 'react';

const ChatMessage: FC<{ message: Message }> = ({ message }) => (
  <div
    className={clsx('m-2 max-w-[300px] border-2 p-4', {
      ...(message.author === 'me'
        ? {
            'self-end': true,
            'bg-orange-200': true,
          }
        : {
            'self-start': true,
            'bg-gray-50': true,
          }),
    })}
  >
    <span id="message-author" className="block text-sm text-gray-600">
      {message.author}
    </span>
    <p id="message-content" className="py-1 text-lg">
      {message.message}
    </p>
    <span id="message-timestamp" className="text-sm text-gray-600">
      {new Date(message.timestamp).toLocaleString()}
    </span>
  </div>
);

export default ChatMessage;
