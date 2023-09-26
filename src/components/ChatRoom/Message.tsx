import Image from 'next/image';
import { IMessage } from '@/types/message';

const Message = ({ from, content }: IMessage) => {
  return (
    <>
      {from === 'bot' && (
        <div className="chat chat-start py-2 whitespace-pre-line animate-fadeInDelay" key={content}>
          <div className="chat-image avatar">
            <div className="w-10 h-10 rounded-full">
              <Image src="/images/avatar.png" alt="avatar" width={40} height={40} />
            </div>
          </div>
          <div className="chat-header">메시지봇</div>
          <div className="chat-bubble">{content}</div>
        </div>
      )}
      {from === 'user' && (
        <div className="chat chat-end py-2" key={content}>
          <div className="chat-bubble bg-sky-200 text-inherit">{content}</div>
        </div>
      )}
    </>
  );
};

export default Message;
