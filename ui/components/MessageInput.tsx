import { FC, useCallback, useState } from 'react';

const MessageInput: FC<{ onNewMessage: (message: string) => void }> = ({
  onNewMessage: handleNewMessage,
}) => {
  const [message, setMessage] = useState('');

  const handleMessageChange = useCallback((e: any) => {
    const { value } = e.target;
    setMessage(value);
  }, []);

  const handleMessageSend = useCallback(() => {
    if (message) {
      handleNewMessage(message);
      setMessage('');
    }
  }, [message, handleNewMessage]);

  return (
    <div className="flex h-[60px] w-full justify-center bg-blue-500 p-1">
      <div className="max-w-700 flex max-w-screen-md flex-1 content-center items-center p-4">
        <input
          type="text"
          className="h-[40px] flex-1 p-2"
          placeholder="Message"
          value={message}
          onChange={handleMessageChange}
        />
        <button
          type="button"
          className="ml-2 h-[40px] rounded bg-orange-400 px-4 text-white"
          onClick={handleMessageSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
