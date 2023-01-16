import clsx from 'clsx';
import { FC, Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { fetchMessages, sendMessage } from 'services/chat';
import ChatMessage from './ChatMessage';
import MessageInput from './MessageInput';

const Chat: FC<{
  inputMessages: Message[];
}> = ({ inputMessages }) => {
  const [messages, setMessages] = useState(inputMessages);
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const [isChatInStartingPosition, setChatInStartingPosition] = useState(false);

  const scrollChatIntoPosition = useCallback(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
      setChatInStartingPosition(true);
    }
  }, [chatWindowRef]);

  const reloadChatMessages = useCallback(async () => {
    try {
      setMessages(await fetchMessages());
    } catch {
      // TODO display error to the user
    }
  }, []);

  const handleNewMessage = useCallback(
    async (chatMessage: string) => {
      const message = { message: chatMessage, author: 'me' };
      try {
        await sendMessage(message);
      } catch {
        // TODO display error to the user
      }

      reloadChatMessages();
    },
    [reloadChatMessages],
  );

  useEffect(scrollChatIntoPosition, [scrollChatIntoPosition, messages]);

  return (
    <main className="h-full bg-blue-200 bg-[url('/body-bg.png')]">
      <div className="relative flex h-full flex-col justify-between">
        <section
          ref={chatWindowRef}
          className={clsx('flex h-full flex-col overflow-x-auto', {
            ...(isChatInStartingPosition
              ? {
                  'opacity-100': true,
                  'transition-opacity': true,
                  'duration-500': true,
                }
              : { 'opacity-0': true }),
          })}
        >
          {!messages?.length ? (
            <div className="flex h-full items-center justify-center">
              <p>Start Chatting!!!</p>
            </div>
          ) : (
            <Fragment>
              {messages.map((message, index) => (
                <ChatMessage
                  key={Math.floor(Math.random() * 100000)}
                  message={message}
                />
              ))}
            </Fragment>
          )}
        </section>

        <MessageInput onNewMessage={handleNewMessage} />
      </div>
    </main>
  );
};

export default Chat;
