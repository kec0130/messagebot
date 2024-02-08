import Header from '@/components/Common/Header';
import ChatRoom from '@/components/Chat';

const Chat = () => {
  return (
    <div className="pb-20">
      <Header title="메시지봇" backUrl="/" buttons={['gallery', 'tutorial']} />
      <ChatRoom />
    </div>
  );
};

export default Chat;
