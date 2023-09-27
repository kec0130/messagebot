import Image from 'next/image';
import { MouseEvent, useState } from 'react';
import { IMessage } from '@/types/message';
import { CheckIcon, CopyIcon } from '../../../public/icons';

interface Props extends IMessage {
  delay?: boolean;
}

const CopyableMessage = ({ content, copyId }: Pick<IMessage, 'content' | 'copyId'>) => {
  const [copiedId, setCopiedId] = useState('');

  const handleCopyClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { id, value } = e.currentTarget;
    navigator.clipboard.writeText(value);
    setCopiedId(id);
    setTimeout(() => setCopiedId(''), 2000);
  };

  return (
    <>
      <button id={copyId} value={content} onClick={handleCopyClick} className="text-left">
        <div className="chat-bubble">{content}</div>
        <div className="absolute right-0 bottom-4">
          {copyId === copiedId ? (
            <CheckIcon className="fill-sky-500" />
          ) : (
            <CopyIcon className="fill-slate-400 w-5 h-5" />
          )}
        </div>
      </button>
    </>
  );
};

const Message = ({ from, content, copyId, delay }: Props) => {
  return (
    <>
      {from === 'bot' && (
        <div
          className={`chat chat-start pt-2 pb-4 whitespace-pre-line relative ${
            delay ? 'animate-fadeInDelay' : 'animate-fadeIn'
          }`}
        >
          <div className="chat-image avatar">
            <div className="w-10 h-10 rounded-full">
              <Image src="/images/avatar.png" alt="avatar" width={40} height={40} />
            </div>
          </div>
          <div className="chat-header">메시지봇</div>
          {copyId ? (
            <CopyableMessage content={content} copyId={copyId} />
          ) : (
            <div className="chat-bubble">{content}</div>
          )}
        </div>
      )}
      {from === 'user' && (
        <div className="chat chat-end py-2">
          <div className="chat-bubble bg-sky-200 text-inherit">{content}</div>
        </div>
      )}
    </>
  );
};

export default Message;
