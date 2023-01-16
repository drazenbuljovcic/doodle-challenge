import { FC, Fragment, useCallback, useState } from 'react';
import { fetchMessages, sendMessage } from 'services/chat';
import ChatMessage from './ChatMessage';
import MessageInput from './MessageInput';

const Chat: FC<{
  inputMessages: Message[];
}> = ({ inputMessages }) => {
  const [messages, setMessages] = useState(inputMessages);

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

  return (
    <main className="h-full bg-blue-200 bg-[url('/body-bg.png')]">
      <div className="relative flex h-full flex-col justify-between">
        <section className="flex h-full flex-col overflow-x-auto">
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
