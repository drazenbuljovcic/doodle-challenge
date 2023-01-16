import { FC, useState } from 'react';

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
            // TODO implmement chat message elements
            <pre>{JSON.stringify(messages, null, 2)}</pre>
          )}
        </section>
      </div>
    </main>
  );
};

export default Chat;
