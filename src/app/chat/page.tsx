import { getMetaData } from '../sharedMetadata';
import ChatRoom from '@/components/Chat';

export const metadata = getMetaData({ url: '/chat' });

const Chat = () => {
  return <ChatRoom />;
};

export default Chat;
