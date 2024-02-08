import clsx from 'clsx';
import Image from 'next/image';
import { useAtom } from 'jotai';

import { IMessage } from '@/types/message';
import { selectedContentAtom } from './states';
import { ShareIcon } from '../../../public/icons';

const Message = ({ from, content, chunkId, fadeIn, delay }: IMessage) => {
  return (
    <>
      {from === 'bot' && (
        <div
          className={clsx(
            'chat chat-start relative whitespace-pre-line pb-4 pt-2',
            fadeIn && 'animate-fadeIn',
          )}
          style={{ animationDelay: delay ? `${delay}s` : '' }}
        >
          <div className="avatar chat-image">
            <div className="h-10 w-10 rounded-full">
              <Image src="/images/avatar.png" alt="avatar" width={40} height={40} />
            </div>
          </div>
          <div className="chat-header">메시지봇</div>
          {chunkId ? (
            <GeneratedMessage content={content} />
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

const GeneratedMessage = ({ content }: Pick<IMessage, 'content'>) => {
  const [, setSelectedContent] = useAtom(selectedContentAtom);

  const openShareModal = () => {
    if (document) {
      (document.getElementById('message-share-modal') as HTMLFormElement).showModal();
      setSelectedContent(content);
    }
  };

  return (
    <div className="flex items-end justify-between gap-1">
      <button className="chat-bubble text-left" onClick={openShareModal}>
        {content}
      </button>
      <button
        className="rounded-full p-1 transition-colors hover:bg-slate-200"
        onClick={openShareModal}
      >
        <ShareIcon className="h-5 w-5 fill-slate-400" />
      </button>
    </div>
  );
};
