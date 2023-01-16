import Chat from '../../ui/components/Chat';

export const getServerSideProps = async () => {
  return {
    props: {
      inputMessages: [],
    },
  };
};

export default Chat;
