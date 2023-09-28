import { getMetaData } from '../sharedMetadata';
import ChatRoom from '@/components/Chat';

export const metadata = getMetaData({});

const Chat = () => {
  return <ChatRoom />;
};

export default Chat;
