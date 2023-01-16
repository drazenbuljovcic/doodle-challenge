import { FC, Fragment, useState } from 'react';
import ChatMessage from './ChatMessage';

const Chat: FC<{
  inputMessages: Message[];
}> = ({ inputMessages }) => {
  console.log({ inputMessages });
  const [messages, setMessages] = useState(inputMessages);

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
      </div>
    </main>
  );
};

export default Chat;
