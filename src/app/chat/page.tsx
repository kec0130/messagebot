import Header from '@/components/Chat/Header';
import ChatRoom from '@/components/Chat';

const Chat = () => {
  return (
    <div className="pb-[80px]">
      <Header title="메시지봇" backUrl="/" buttons={['gallery', 'tutorial']} />
      <ChatRoom />
    </div>
  );
};

export default Chat;
