import clsx from 'clsx';
import Image from 'next/image';
import { MouseEvent, useState } from 'react';
import { IMessage } from '@/types/message';
import { CheckIcon, CopyIcon } from '../../../public/icons';

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
        <div className="absolute bottom-4 right-0">
          {copyId === copiedId ? (
            <CheckIcon className="fill-sky-500" />
          ) : (
            <CopyIcon className="h-5 w-5 fill-slate-400" />
          )}
        </div>
      </button>
    </>
  );
};

const Message = ({ from, content, copyId, animation }: IMessage) => {
  return (
    <>
      {from === 'bot' && (
        <div
          className={clsx('chat chat-start relative whitespace-pre-line pb-4 pt-2', {
            'animate-fadeIn': animation === 'fadeIn',
            'animate-fadeInDelay': animation === 'fadeInDelay',
          })}
        >
          <div className="avatar chat-image">
            <div className="h-10 w-10 rounded-full">
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
