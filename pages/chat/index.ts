import Chat from 'ui/components/Chat';
import { fetchMessages } from 'services/chat';

export const getServerSideProps = async () => {
  const inputMessages = await fetchMessages();
  return {
    props: {
      inputMessages,
    },
  };
};

export default Chat;
